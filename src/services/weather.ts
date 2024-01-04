import { api } from "@config/api"

export const getWeather = (city: string)=> api.get(`https://en.wttr.in/${city}?0Q`)