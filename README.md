# Google PlayStore Metrics Dashboard

Welcome to the Google PlayStore Metrics Dashboard! This project provides a visual representation of various metrics related to apps on the Google PlayStore.

## Table of Contents
- [Project Setup Instructions](#project-setup-instructions)
- [APIs](#apis)
- [About the Project](#about-the-project)
- [Data Structure](#data-structure)
- [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)

## Project Setup Instructions
To set up and run the project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/iam-harshit/google-playstore-metrics.git
   
2. **Install Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   
3. **Install Backend Dependencies:**
   ```bash
   cd Backend
   npm install
   
4. **Set up MongoDB:**
   - Make sure MongoDB is installed and running on your machine.
   - Update the MongoDB connection URI in the **.env** file if necessary.
     
5. **Run the App:**
   - For Backend
   ```bash
   cd Backend
   npm start
   
  - For Frontend
    ```bash
    cd frontend
    npm start
    
**Note:** Backend running on port 8082.

## APIs

| Endpoint                               | Description                 |
|----------------------------------------|-----------------------------|
| /v1/auth/login                         | for login user              |
| /v1/auth/register                      | for register user           |
| /v1/metrics/all                        | for seeing all metrics      |
| /v1/metrics/metricsId                  | for seeing specific metric  |
| /v1/metrics/update/metricsId           | for updating metric         |
| /v1/metrics/delete/metricsId           | for deleting metric         |

## About the Project
The Google PlayStore Metrics Dashboard provides insights into various metrics related to apps available on the Google PlayStore platform. These metrics include but are not limited to:
- Downloads: Total number of downloads for each app.
- Ratings: Average user ratings for each app.
- Uninstalls: Number of uninstalls for each app.
- Installs: Number of installs for each app.
- Revenue: Total revenue for each app.
and many more.

## Data Structure
The project utilizes a structured data format to represent app metrics. Each entry in the dataset contains information about a specific app, including its package name, number of downloads, ratings, reviews, uninstalls, installs, active installs, etc. This data is stored in a MongoDB database and fetched using Node.js and Express.js on the backend.
