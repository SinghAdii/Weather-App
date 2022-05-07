const request = require('request')

const geocode = function(address, callback){
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(address)+ '.json?access_token=pk.eyJ1IjoiZnJpZWRtYWdnaSIsImEiOiJja2pzbHloMmsweXJiMnlxaHJyMnJveXo1In0.-l1vVUIpmrNJKwG_1X0muQ'

    request({ url: url,json: true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }
        else{
             callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
                //  response.body.features[0].center[1])
             })
        }

    })

//    / console.log(address)
}





module.exports = geocode