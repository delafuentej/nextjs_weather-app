export default async function handler( req, res){
    const { cityInput }= req.body;
    const getWeatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${process.env.OPENWEATHER_API_KEY}
        `
    );
    console.log('getWeatherData', getWeatherData);
    const data = await getWeatherData.json();
    res.status(200).json(data);
};