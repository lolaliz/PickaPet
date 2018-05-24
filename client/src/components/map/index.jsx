import React from 'react';

class Map extends React.Component {
    initMap() {
        var options = {
            //get coordinates from average of results
            center: {lat: 32, lng: -117},
            zoom: 11
        }
        var map = new google.maps.Map(document.getElementById('map'), options);
        
        var icon = {
            path: 'M -15,-15 15,-15 15,15 -15,15 -15,-15',
            fillColor: 'grey',
            fillOpacity: 0.8,
            scale: 1,
            strokeColor: 'black',
            strokeWeight: 2
        };
        
        //add Marker function
        //call add marker function for each of the 5 results of yelp search
        function addMarker(props) {
            var marker = new google.maps.Marker({
                position: props.coords,
                map: map,
                icon: icon,
                label: props.resultNum /* RESULT NUMBER*/
            })
            var infoWindow = new google.maps.InfoWindow({
            content: '<div><h4>' + props.name + '</h4><hr><p>' + props.address + '</p></div>'/*Location name and address*/
            })
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            })
        };
    }
    render() {
        return (
            <div id="mapContainer">
                <h2>Map Nearby Pet Locations</h2>
                <button className="mapButton" id="park" value="dog park">Dog Parks</button>
                <button className="mapButton" id="store" value="pet store">Pet Stores</button>
                <button className="mapButton" id="restaurant" value="pet friendly restaurant">Pet Friendly Restaurants</button>
                <div id="map"></div>
            </div>
        )
    }
}

export default Map;