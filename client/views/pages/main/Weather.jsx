import React from "react";

export default function Weather() {
  const [date, setDate] = React.useState();
  const [temp, setTemp] = React.useState();
  const [weather, setWeather] = React.useState();
  function clock() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    const week = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    const dayLabel = week[dayOfWeek];
    setDate(`${year}년 ${month}월 ${day}일 ${dayLabel}`);
  }

  function weatherApi() {
    const API_Key = "b252d4549d25542a2527ef780e93a65a";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.872392&lon=128.601617&appid=${API_Key}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weatherResult = parseInt(data.main.temp);
        setTemp(weatherResult);
        const src = data.weather[0].icon;
        setWeather(`client/resources/files/icon/weather_type/${src}.png`);
      })
      .catch((error) => console.log("error:", error));
  }

  React.useEffect(() => {
    clock();
    weatherApi();
  }, []);

  return (
    <div className="weather-info flex-end">
      <ul className="flex-start">
        <li id="fullDate">{date}</li>
        <li id="temp">{`${temp}°C`}</li>
        <li><img src={weather} alt="" style={{width:"75%"}}/></li>
      </ul>
    </div>
  );
}
