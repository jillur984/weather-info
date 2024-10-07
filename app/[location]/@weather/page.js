import WeatherComponet from "@/components/WeatherComponet"

const WeatherPage = ({params:{location},searchParams:{latitude,longitude}}) => {
  return (
    <WeatherComponet lat={latitude} lon={longitude}/>
  )
}

export default WeatherPage