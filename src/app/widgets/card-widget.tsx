import React from 'react';

export default function CardWidget({children, title, description}: {children: React.ReactNode, title: string, description: string}) {
    return (
        <div className="outline-1 outline-gray-700 bg-white text-black p-10 mx-8 h-96 w-96">
            <p className="text-lg font-bold text-left mb-4">
                {title}
            </p>
            <hr/>
            <br/>
            <p className="text-md max-w-2xl">
                {description}
            </p>
            <br/>
            {children}
        </div>
    );
}