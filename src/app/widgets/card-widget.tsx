import React from 'react';

export default function CardWidget({children, title, description}: {children?: React.ReactNode, title: string, description: string}) {
    return (
        <div className="bg-white text-black p-10 min-h-20 px-5">
            <p className="text-lg font-bold mb-4 text-center">
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