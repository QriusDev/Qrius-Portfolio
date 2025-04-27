'use client';

import React from "react";
import { Children } from "react";

export default function GalleryWidget({children, focusCount=1, viewCount=3} : {children: React.ReactNode, focusCount?: number, viewCount?: number}) {
    const [index, setIndex] = React.useState(0);

    const itemList: React.ReactElement[] = []
    Children.forEach(children, (child, childIndex) => {
        // Check if the index is 
        if (itemList.length < viewCount && Math.abs(index - childIndex) <= focusCount) {
            let cname = "px-10 ";
            if (index === childIndex) {
                cname += "basis-4/8 transform transition-transform hover:scale-105";
            }
            else
            {
                cname += "basis-2/8 opacity-50";
            }
            itemList.push((
                <div className={cname} key={childIndex}>
                    {child}
                </div>
            ));
        }
    });


    function handleClick_Next() {
        setIndex((index + 1) % itemList.length);
    }

    function handleClick_Prev() {
        setIndex((index - 1 + itemList.length) % itemList.length);
    }

    return (
        <>
            <div className="flex flex-row justify-items-center items-center px-20">
                <button onClick={handleClick_Prev} className="basis-1/8 items-center justify-center m-5 p-3 outline-1 text-white bg-black transform transition-transform hover:scale-105 hover:bg-white hover:text-black hover:cursor-pointer">
                    Prev
                </button>
                <div className="basis-6/8 transform transition-transform hover:scale-105">
                    {children && itemList[index]}
                </div>
                <button onClick={handleClick_Next} className="basis-1/8 items-center justify-center m-5 p-3 outline-1 text-white bg-black transform transition-transform hover:scale-105 hover:bg-white hover:text-black hover:cursor-pointer">
                    Next
                </button>
            </div>
        </>
    )
}