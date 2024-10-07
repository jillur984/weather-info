import { getLocationsByName } from "../location-util";
export async function GET(_request,{params}){

    const locationData=getLocationsByName(params?.name)


    return Response.json(locationData)

}