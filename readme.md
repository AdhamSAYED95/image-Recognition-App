# Image Recognition Web App

This is a full-stack web application for image recognition that leverages AI to identify objects and people within images. Users can either upload an image or provide an image URL to get real-time recognition results. The application is built with React for the frontend, Express for the backend, and Multer for handling image uploads. The AI image recognition is powered by the Clarifai API.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can view the live demo of the application [here](https://image-recognition-app-virid.vercel.app).

## Features

- **AI-Powered Image Recognition:** Utilizes the Clarifai API to detect and label objects in images with high accuracy.
- **Image Upload:** Users can upload an image from their local device.
- **Image URL:** Users can provide an image URL for recognition.
- **Real-time Results:** The app returns labels and probabilities for recognized objects in the image.
- **Responsive Design:** The app is designed to work on both desktop and mobile devices.

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm or yarn

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/image-recognition-app.git
   cd image-recognition-app
   ```

2. Install backend dependencies:

```bash
npm install
```

3.Create a .env file in the backend directory and add your environment variables:

```bash
PORT=5000
CLARIFAI_API_KEY=your_clarifai_api_key
```

4.Start the backend server:

```bash
npm start

```

### Frontend

1.Navigate to the frontend directory:

```bash
cd frontend
```

2.Install frontend dependencies:

```bash
npm install
```

4.Start the frontend development server:

```bash
npm start
```

### Usage

1.Open the application in your web browser:

```bash
http://localhost:3000
```

2.You can either upload an image from your local machine or provide an image URL.

3.Click the "Submit" button to see the AI-powered recognition results.

### Technologies Used

## Frontend:

- React
- React Bootstrap
- Axios

## Backend:

- Express
- Multer (for file uploads)
- Clarifai API (for AI image recognition)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any bug fixes or improvements.
