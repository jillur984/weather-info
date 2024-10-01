import { getLocationByName } from "../location-utils";

export async function GET(_request,{params}){
    const locationData=await getLocationByName(params?.name)
    return Response.json(locationData)
}