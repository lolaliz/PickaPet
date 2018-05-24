import React from 'react';
const keys = require('../../../../keys.js')

class MapScript extends React.Component {
    render() {
        const url = "https://maps.googleapis.com/maps/api/js?key=" + keys.googlemaps.api_key + "&callback=initMap"
        return {
            <script src={url} async defer></script>
        }
    }
}
export default MapScript;