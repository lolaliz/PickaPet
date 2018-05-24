console.log('keys.js is loaded');

// exports.petfinder = {
//     api_key: process.env.PETFINDER_API_KEY,
//     api_secret: process.env.PETFINDER_API_SECRET
// }

// exports.yelp = {
//     api_key: process.env.YELPFUSION_API_KEY
// }

exports.
module.exports = {
    petfinder: {
        api_key: process.env.PETFINDER_API_KEY,
        api_secret: process.env.PETFINDER_API_SECRET
    },
    yelp: {
        api_key: process.env.YELPFUSION_API_KEY
    },
    googlemaps: {
        api_key: process.env.GOOGLEMAPS_API_KEY
    }
}