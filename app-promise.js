const yargs = require('yargs');
const axios = require('axios');
const API_KEY = '84f1168200c9efe68ddaf35238d7c48e';


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

   var encodedAddress = encodeURIComponent(argv.address);
   var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

   axios.get(geocodeUrl).then((response)=>{             
       
       if(response.data.status === 'ZERO_RESULTS'){
           throw new Error('Unable to find that address.');         
       }       
       
       var latitude = response.data.results[0].geometry.location.lat ;
       var longitude = response.data.results[0].geometry.location.lat;
       var weatherUrl = `https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`;

       console.log(response.data.results[0].formatted_address);

       return axios.get(weatherUrl)

   })
   .then((response)=>{
        var temprature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temprature} and feels like ${apparentTemperature}.`);
   })
   .catch((e)=> {
       if(e.response && e.response.status === 404){
            console.log(e);
            console.log('Unable to connect to api service.');
       }else {
            console.log(e.message);
       }       
   });