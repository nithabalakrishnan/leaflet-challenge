// Create map object
var myMap = L.map("map", {
    center: [33.98, -39.17],
    zoom: 3
  });

// Create and add tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
}).addTo(myMap);  

// Store API query URL
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Function to set marker color based on magnitude using a ternary operator
function getColor(mag){
    return mag > 5 ? "#d73027":
        mag > 4 ? "#fc8d59" :
        mag > 3 ? "#fee08b":
        mag > 2 ? "#d9ef8b":
        mag > 1 ? "#91cf60":
        "#1a9850";
}

d3.json