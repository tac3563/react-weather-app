import { fetchWeatherData } from "./weatherApi";

export interface CurrentWeatherData {
  currentTempC: number;
  minTempC: number;
  maxTempC: number;
  uvIndex: number;
  rainfall: number;
  conditions: string;
}

export async function getCurrentWeatherData(): Promise<CurrentWeatherData> {
  const data = await fetchWeatherData();

  const currentWeatherData: CurrentWeatherData = {
    currentTempC: data.current.temp_c,
    minTempC: data.forecast.forecastday[0].day.mintemp_c,
    maxTempC: data.forecast.forecastday[0].day.maxtemp_c,
    uvIndex: data.forecast.forecastday[0].day.uv,
    rainfall: data.forecast.forecastday[0].day.totalprecip_mm,
    conditions: data.current.condition.text,
  };

  return currentWeatherData;
}

getCurrentWeatherData();
