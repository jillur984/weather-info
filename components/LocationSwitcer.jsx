"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getLocationLatLongList } from "@/lib/location-info";

const LocationSwitcer = () => {
  const [showlocationList, setShowLocationList] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getLocationList() {
      const locationList = await getLocationLatLongList();
      setLocations(locationList);
    }

    getLocationList();
  }, []);

  return (
    <>
      <div className="relative">
        <button onClick={() => setShowLocationList(!showlocationList)}>
          <Image
            className="size-9"
            src="/link.svg"
            alt="link icon"
            width={18}
            height={18}
          />
        </button>
        {showlocationList && (
          <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
            <ul
              role="list"
              className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
            >
              {locations.map((info) => (
                <li key={info.location}>
                  <Link
                    href={`/${info.location}?latitude=${info.latitude}&longitude=${info.longitude}`}
                  >
                    {info.location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default LocationSwitcer;
