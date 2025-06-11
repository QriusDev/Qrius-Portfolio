'use client';

import React from "react";
import { Children } from "react";

export default function GalleryWidget({children} : {children: React.ReactNode}) {
    const [index, setIndex] = React.useState(0);
    if (!children) {
        return <div className="text-center text-gray-500">No items to display</div>;
    }
    const itemList: React.ReactElement[] = []
    Children.forEach(children, (child, childIndex) => {
        const cname = "px-10 ";
        itemList.push((
            <div className={cname} key={childIndex}>
                {child}
            </div>
        ));
    });


    function handleClick_Next() {
        const newIndex = index + 1;
        setIndex(newIndex % itemList.length);
    }

    function handleClick_Prev() {
        const newIndex = index - 1;
        setIndex((newIndex + itemList.length) % itemList.length);
    }

    return (
        <>
            <div className="flex flex-row justify-items-center items-center">
                <button onClick={handleClick_Prev} className="basis-1/8 items-center justify-center p-3 outline-1 text-white bg-black transform transition-transform hover:scale-105 hover:bg-white hover:text-black hover:cursor-pointer">
                    Prev
                </button>
                <div className="basis-6/8 items-center justify-items-center transform transition-transform hover:scale-105">
                    {children && itemList[index]}
                </div>
                <button onClick={handleClick_Next} className="basis-1/8 items-center justify-center p-3 outline-1 text-white bg-black transform transition-transform hover:scale-105 hover:bg-white hover:text-black hover:cursor-pointer">
                    Next
                </button>
            </div>
        </>
    )
}