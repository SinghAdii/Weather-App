const request = require('request')




const forecast= (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=45e784f2732ccf12c695dc11f7498980&query=' + latitude + ','+ longitude
    request({url: url, json: true},(error,{body}={})=>{
        if(error){
            callback('network error!',undefined)
        }
        else if(body.error){
            callback('unable to find location',undefined)
        }
        else{
            // console.log(response.body)
            callback(undefined, "It is currently " + body.current.temperature+ "°C out. There is "+ body.current.precip + "% chance of rain")
        }
    })
}


module.exports = forecast