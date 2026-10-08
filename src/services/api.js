import axios from "axios";

const ibgeAPI = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1",
});

const climaAPI = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});

export async function buscarEstados() {
  const response = await ibgeAPI.get("/localidades/estados");

  return response.data;
}

export async function buscarMunicipios(siglaEstado) {
  const response = await ibgeAPI.get(
    `/localidades/estados/${siglaEstado}/municipios`
  );

  return response.data;
}

export async function buscarClima(latitude, longitude) {
  const response = await climaAPI.get("/forecast", {
    params: {
      latitude,
      longitude,
      current:
        "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
      timezone: "America/Sao_Paulo",
    },
  });

  return response.data;
}