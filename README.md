

# Real-Time Data Processing System for Weather Monitoring

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/aditya-mnnit/Weather_App/blob/main/LICENSE)

## Overview

This **Real-Time Data Processing System** provides continuous monitoring of weather data for various Indian metros. Leveraging the [OpenWeatherMap API](https://openweathermap.org/), the application retrieves real-time weather updates, computes daily summaries, and triggers alerts based on user-defined thresholds. The project showcases key aspects of real-time data processing, aggregation, and threshold-based alerting with visualizations for historical trends.

## Features

1. **Real-Time Weather Monitoring**: Fetches weather updates at a configurable interval (e.g., every 5 minutes) for major Indian metros (Delhi, Mumbai, Chennai, Bangalore, Kolkata, Hyderabad).
2. **Daily Rollups and Aggregates**:
   - Calculates daily average, maximum, and minimum temperatures.
   - Identifies dominant weather conditions, determined by the frequency of conditions like Rain, Clear, etc.
3. **Configurable Alerts**:
   - User-defined thresholds for temperature and weather conditions.
   - Alerts trigger when thresholds are violated (e.g., temperature exceeds 35°C for two consecutive updates).
4. **Data Visualization**:
   - Displays daily summaries, historical trends, and triggered alerts.

## Tech Stack

- **Frontend**: React.js for user interface and visualizations
- **Backend**: Node.js, Express.js for API endpoints and data processing
- **Database**: MongoDB (or preferred persistent storage for storing weather data and alerts)
- **API**: OpenWeatherMap API

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- MongoDB (local or cloud-based)
- OpenWeatherMap API Key (sign up [here](https://home.openweathermap.org/users/sign_up))

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/aditya-mnnit/Weather_App.git
   cd Weather_App
   ```

2. **Install Dependencies**:

   ```bash
   # Install backend dependencies
   npm install

   # Navigate to frontend and install dependencies
   cd client
   npm install
   ```

3. **Environment Variables**:

   Create an `.env` file in the project’s root directory to store API keys and other configurations. Sample configuration:

   ```plaintext
   API_KEY=your_openweathermap_api_key
   DB_URI=your_mongodb_uri
   INTERVAL=300000  # Interval in milliseconds (e.g., 5 minutes)
   ALERT_THRESHOLD=35 # Set temperature threshold for alerts
   ```

4. **Run the Application**:

   ```bash
   # Start the backend server
   npm run server

   # In a new terminal, start the frontend
   npm run client
   ```

### Project Structure

```plaintext
Weather_App
├── client                # React frontend
│   ├── src
│   ├── public
│   └── package.json
├── server                # Express backend
│   ├── controllers       # API controllers
│   ├── models            # Database models
│   ├── routes            # API routes
│   └── server.js         # Main backend server entry point
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## Key API Endpoints

- **GET** `/api/weather` - Retrieves the latest weather data for configured locations.
- **GET** `/api/weather/daily-summary` - Fetches daily summaries and aggregates.
- **POST** `/api/weather/alert` - Sets up alert thresholds and configurations.

## Rollups and Aggregates

1. **Daily Weather Summary**:
   - Rollup for each day’s weather data.
   - Daily aggregates calculated include:
     - **Average Temperature**
     - **Maximum Temperature**
     - **Minimum Temperature**
     - **Dominant Weather Condition**: Determined based on the highest frequency of a particular weather type.
  
2. **Alert Thresholds**:
   - Users can configure thresholds based on weather conditions or temperature.
   - Alerts are generated if thresholds (e.g., temperature > 35°C) are breached for two consecutive updates.

## Test Cases

1. **System Initialization**:
   - Verify that the system starts correctly and connects to OpenWeatherMap API with a valid key.
2. **Data Retrieval**:
   - Test API calls at configured intervals.
   - Verify data retrieval for specified cities and correct response parsing.
3. **Temperature Conversion**:
   - Ensure accurate conversion of temperature values from Kelvin to Celsius or Fahrenheit based on user preference.
4. **Daily Summary Aggregation**:
   - Simulate multiple weather updates to test daily rollups for average, max, min temperatures, and dominant weather condition.
5. **Alert Threshold Validation**:
   - Configure thresholds for specific weather conditions or temperatures.
   - Simulate data exceeding thresholds and verify alert trigger.

## Future Enhancements

1. **Additional Parameters**: Extend support for humidity, wind speed, and other parameters from OpenWeatherMap.
2. **Forecast Summaries**: Generate insights based on predicted weather conditions.
3. **Improved Alerting**: Add email/SMS notifications for threshold breaches.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/aditya-mnnit/Weather_App/blob/main/LICENSE) file for details.

## Contributing

We welcome contributions! Please open issues or submit pull requests to suggest improvements or add new features.

---

This `README.md` offers comprehensive project documentation for your repository, helping others understand the purpose, setup, and usage of your weather monitoring application. Be sure to update placeholders like `your_openweathermap_api_key` with actual credentials in your `.env` file for a successful setup.
