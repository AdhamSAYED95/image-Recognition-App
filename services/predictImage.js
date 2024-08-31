const asyncHandler = require("express-async-handler");
const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();
const metadata = new grpc.Metadata();

metadata.set("authorization", `Key 7d670a56326849609d48a77dec73f6d7`);

function predict(inputs) {
  return new Promise((resolve, reject) => {
    stub.PostModelOutputs(
      {
        model_id: "aaa03c23b3724a16a56b629203edc62c",
        inputs: inputs,
      },
      metadata,
      (err, response) => {
        if (err) {
          reject("Error: " + err);
          return;
        }

        if (response.status.code !== 10000) {
          reject(
            "Received failed status: " +
              response.status.description +
              "\n" +
              response.status.details
          );
          return;
        }
        let results = [];
        for (const c of response.outputs[0].data.concepts) {
          results.push({
            name: c.name,
            value: c.value,
          });
        }
        resolve(results);
      }
    );
  });
}

exports.predictTheImage = asyncHandler(async (req, res, next) => {
  const { imageUrl } = req.body;
  const inputs = [
    {
      data: {
        image: {
          url: imageUrl,
        },
      },
    },
  ];
  const results = await predict(inputs);
  return res.status(200).json({
    results,
  });
});

exports.uploadImagesample = asyncHandler(async (req, res, next) => {
  const inputs = [
    {
      data: {
        image: {
          base64: req.file.buffer,
        },
      },
    },
  ];
  const results = await predict(inputs);
  return res.status(200).json({
    results,
  });
});
