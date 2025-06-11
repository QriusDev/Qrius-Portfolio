import React from 'react';

export default function CardWidget({children, title, description}: {children?: React.ReactNode, title: string, description: string}) {
    return (
        <div className="outline-5 outline-gray-700 bg-white text-black p-10 min-h-20 w-250">
            <p className="text-lg font-bold text-left mb-4">
                {title}
            </p>
            <hr/>
            <br/>
            <p className="text-md">
                {description}
            </p>
            <br/>
            {children}
        </div>
    );
}