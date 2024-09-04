# Weather App

This Weather App allows users to check the weather across the world, presenting the data in a user-friendly interface. Built using **Next.js** and the **OpenWeatherMap API**, this application offers real-time weather updates with a responsive design, ensuring a seamless experience across all devices.

Here is a preview of how it works:

<div style="display: flex; justify-content: center;">
  
      <img src="img/gifs/weather-app.gif" alt="Video android" />
   
</div>


## Tech Stack

- **Next.js**: A React framework created by Vercel that enables the building of scalable static and dynamic websites and web applications. It supports server-side rendering, static site generation, and has an integrated API routing system.
- **OpenWeatherMap API**: An online data platform that provides historical, current, and forecasted weather data via efficient APIs. We use this API to fetch real-time weather information for cities worldwide.

## Features

This weather app includes the following features:

- **City Search**: Users can search for weather information by entering the name of any city globally.
- **Current Local Time and Date**: Displays the current local time and date for the searched city.
- **Temperature Units**: Users can toggle between metric (Celsius) and imperial (Fahrenheit) units.
- **Humidity, Wind Speed, and Direction**: Provides detailed weather information, including humidity level, wind speed, and direction.
- **Sunrise and Sunset Times**: Displays the local sunrise and sunset times for the searched city.
- **Responsive Design**: The application is fully responsive, ensuring a consistent user experience on desktops, tablets, and mobile devices.
- **Error Handling**: Proper error messages are shown when a city is not found or when there is an issue with the API request.
- **Loading Information**: A loading indicator is displayed while fetching data from the API.

## Project Setup

### Prerequisites

To run this project, you'll need to have Node.js and npm (or yarn) installed.

### Installation & Getting Started
 
1. Clone the repository:

   ```bash
   git clone https://github.com/delafuentej/nextjs_weather-app.git
   cd nextjs_weather-app
   ```
2. Install the dependencies: 

   ```bash
    npm install 
   ```
      ```bash
    yarn install 
   ```
3. Create a .env.local file in the root directory and add your OpenWeatherMap API key:

 ```bash
    API_KEY=your_openweathermap_api_key
```
4. Run the development server:
```bash
    npm run dev
```
```bash
    yarn dev
```
5. Open http://localhost:3000 with your browser to see the app in action.

### Instructions:
- **Live Demo**:  **https://nextjs-weather-app-ruby.vercel.app/**