"use client";

import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { CapNumberLabel } from "app/util/number-util";

/**
 * This widget is a button that when clicked will increment the amount of times it is clicked in a local variable.
 * 
 */
export default function PetCatWidget() {
    const [cookies, setCookie] = useCookies(['pets']);
    const [pets, setPets] = useState(0);

    const localPetCount = cookies.pets ? cookies.pets : pets;
    const globalPetCount = 133;
    const cappedLocalPetCountLabel = CapNumberLabel(localPetCount);
    const cappedGlobalPetCountLabel = CapNumberLabel(globalPetCount);
    

    useEffect(() => {
        if (!cookies.pets || pets > cookies.pets)
        {
            setCookie('pets', pets, {path: '/'});
            console.log(cookies.pets);
        }
    }, [pets, setCookie, cookies.pets])

    function handlePetCat() {
        setPets(localPetCount + 1);
    }

    return (
        <>
            <button className="w-fit hover:cursor-pointer z-10" onClick={handlePetCat}>
                <span className="rounded-l-full bg-white p-4 text-black border-l-2 border-t-2 border-b-2 border-white">
                    {cappedLocalPetCountLabel[0]}{cappedLocalPetCountLabel[1]}&nbsp;
                    times
                </span>
                <span className="rounded-r-full bg-black p-4 text-white border-r-2 border-t-2 border-b-2 border-white">
                    {cappedGlobalPetCountLabel[0]}{cappedGlobalPetCountLabel[1]}&nbsp;
                    Pet Cat
                </span>
            </button>
        </>
    )
}