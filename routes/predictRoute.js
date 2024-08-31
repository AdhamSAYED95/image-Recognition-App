const express = require("express");

const {
  predictTheImage,
  uploadImagesample,
} = require("../services/predictImage");

const { uploadSingleImage } = require("../middlewares/uploadImageMiddleWare");

const router = express.Router();

router.post("/", predictTheImage);

router.post("/upload", uploadSingleImage("file"), uploadImagesample);

module.exports = router;
