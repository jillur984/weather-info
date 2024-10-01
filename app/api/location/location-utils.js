const data = [
    {
        location: "London",
        latitude: 51.5073219,
        longitude: -0.1276474,
    },
    {
        location: "Kolkata",
        latitude: 22.5726723,
        longitude: 88.3638815,
    },
    {
        location: "Dhaka",
        latitude: 23.777176,
        longitude: 90.399452,
    },
    {
        location: "Singapore",
        latitude: 1.2899175,
        longitude: 103.8519072,
    },
    {
        location: "New York",
        latitude: 40.7127281,
        longitude: -74.0060152,
    },
    {
        location: "Toronto",
        latitude: 43.6534817,
        longitude: -79.3839347,
    },
    {
        location: "Mymensingh",
        latitude: 24.747149,
        longitude: 90.420273,
    },
    {
        location: "Chittagong",
        latitude: 22.347537,
        longitude: 91.812332,
    }
];

function getLocations(){
    return data
}
function getLocationByName(location){
  if(!location) return undefined
  const found=data.find((item)=>item.location.toLowerCase()===location.toLowerCase())

  return found || {}
}

export {getLocations,getLocationByName}