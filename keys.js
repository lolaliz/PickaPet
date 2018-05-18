console.log('keys.js is loaded');

exports.petfinder = {
    api_key: process.env.PETFINDER_API_KEY,
    api_secret: process.env.PETFINDER_API_SECRET
}

exports.yelp = {
    apiKey: process.env.YELPFUSION_API_KEY
};