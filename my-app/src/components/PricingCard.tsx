import { MouseEventHandler } from "react";
import React from 'react';

type itemProps = {
    name: string;
    price: string;
    features: [];
    priceDetails: string
  };

 // WORK IN PROGRESS NOT CURRENTLY USED SEE PRICING FOR COMPONENTS 

const PricingCard = ( item: itemProps, isHovering: PopStateEvent, onMouseEnter: MouseEventHandler, onMouseLeave: MouseEventHandler) => {

    const {name , price, features, priceDetails} = item

    return (
        <div className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4 z-10`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

            {isHovering 
            ? 
                <>  
                    <div className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow z-10`} >
                        <div className={`w-full p-8 text-3xl font-bold text-center`}>
                            {name}
                        </div>
                    <div className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}> </div>
                    <ul className={`w-full text-center text-base font-bold`}>
                        {features.map((feature) => (
                            <li
                                className={`border-b py-4`}
                                key={`${name}-${feature}`}
                            >
                                {feature}
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}>
                        <div className={`w-full pt-6 text-4xl font-bold text-center`}>
                            {price}
                            <span className={`text-base`}> {priceDetails}</span>
                        </div>
                    </div>
                </>
            : 
                <>           
                    <div className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}>
                        <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                            {name}
                        </div>
                        <ul className={`w-full text-center text-sm`}>
                            {features.map((feature: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => (
                                <li
                                    className={`border-b py-4`}
                                    key={`${name}-${feature}`}
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}>
                        <div className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center `}>
                            {price}
                            <span className={`text-base`}> {priceDetails}</span>
                        </div>
                    </div>
                </>
            }

        </div>
    );
}

export default PricingCard;
