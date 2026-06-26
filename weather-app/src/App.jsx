import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = import.meta.env.VITE_WEATHER_API;
  // console.log(apiKey);
  const fetchWeatherData = async () => {
    const fetchWeather = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`,
    );
    const weatherData = await fetchWeather;
    const weatherJson = await weatherData.json();
    setWeatherData(weatherJson);
    console.log("Weather Data: ", weatherJson);
  };

  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Weather App</h1>
        <p>Let's turn this into a weather app</p>
        <div style={{ display: "flex", gap: "4px" }}>
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
              // console.log("inputValue: ", inputValue);
            }}
          />
          <button onClick={fetchWeatherData}>Search</button>
        </div>

        {weatherData !== null ? (
          <div>
            <p>Temperature: {weatherData.main.temp} K</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        ) : (
          <p>Just enter the city name and click the search button</p>
        )}
      </div>
    </>
  );
}

export default App;
