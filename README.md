# Weather React App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://api.netlify.com/api/v1/badges/63b33074-b118-4b67-b1d8-c53f867d219f/deploy-status)](https://app.netlify.com/sites/weather-react-app-ayan/deploys)

This is a simple and responsive weather application built using React. It allows users to search for weather information by city name and displays current weather conditions, including temperature, description, humidity, wind speed, and an icon representing the weather.

**[Live Demo](https://weather-react-app-ayan.netlify.app/)**

## Features

*   **Search by City:** Easily search for weather information by entering a city name.
*   **Current Weather Conditions:** Displays temperature (Celsius), weather description (e.g., "Clear sky"), humidity, and wind speed.
*   **Weather Icon:** Shows a relevant icon representing the current weather conditions.
*   **Responsive Design:** Works seamlessly on various devices, including desktops, tablets, and smartphones.
*   **Error Handling:** Provides informative error messages for invalid city names or API errors.
*   **Clean and Intuitive User Interface:** User-friendly design for a smooth and enjoyable experience.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **OpenWeatherMap API:** Used to fetch weather data based on city name.
*   **Axios:** A promise-based HTTP client for making API requests.
*   **CSS:** For styling and visual presentation.
*   **React Icons:** For using weather-related icons.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/ayanhakeem/weather-react-app.git
    
2.  **Navigate to the project directory:**

    ```bash
    cd weather-react-app
    
3.  **Install dependencies:**

    ```bash
    npm install  or  yarn install
    
## Usage

1.  **Obtain an API key from OpenWeatherMap:**

    *   Go to [https://openweathermap.org/api](https://openweathermap.org/api) and sign up for a free account.
    *   Once you have an account, you can generate an API key.

2.  **Create a `.env` file in the project's root directory:**

    *   Add the following line to the `.env` file, replacing `YOUR_API_KEY` with your actual OpenWeatherMap API key:

        
        REACT_APP_API_KEY=YOUR_API_KEY
        
    *   **Important:** Add `.env` to your `.gitignore` file to prevent your API key from being committed to your repository.

3.  **Start the development server:**

    ```bash
    npm start  or  yarn start
    
4.  **Open your browser and navigate to `http://localhost:3000` to view the application.**

## Project Structure

weather-react-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js          # Main application component
│   ├── components/
│   │   ├── Weather.js    # Component to display weather information
│   │   ├── Search.js     # Component for the search bar
│   │   └── ...
│   ├── App.css           # Main application styles
│   └── index.js        # Entry point of the application
├── .env                # Environment variables (API key)
├── .gitignore          # Specifies intentionally untracked files that Git should ignore
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation (this file)
└── ...
## Contributing

Contributions are welcome!  If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Commit your changes with descriptive commit messages.
5.  Push your branch to your forked repository.
6.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Ayan Hakeem](https://github.com/ayanhakeem)

## Acknowledgements

*   OpenWeatherMap API for providing weather data.
*   Create React App for the initial project setup.
*   All contributors who have helped improve this project.
