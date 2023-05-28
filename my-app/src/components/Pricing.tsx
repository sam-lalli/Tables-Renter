import React, { useState } from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;
  const [firstPlan, secondPlan, thirdPlan] = items;

  const [isHovering, setIsHovered] = useState(false);
  const [isHovering2, setIsHovered2] = useState(false);
  const [isHovering3, setIsHovered3] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const onMouseEnter2 = () => setIsHovered2(true);
  const onMouseLeave2 = () => setIsHovered2(false);
  const onMouseEnter3 = () => setIsHovered3(true);
  const onMouseLeave3 = () => setIsHovered3(false);

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}>


        {/* First Item */}

            {isHovering 
            ? 
              <div className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-1`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>   
                <div className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow z-10`} >
                    <div className={`w-full p-8 text-3xl font-bold text-center`}>
                        {firstPlan?.name}
                    </div>
                <div className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}> </div>
                <ul className={`w-full text-center text-base font-bold`}>
                    {firstPlan?.features.map((feature) => (
                        <li
                            className={`border-b py-4`}
                            key={`${firstPlan?.name}-${feature}`}
                        >
                            {feature}
                        </li>
                    ))}
                </ul>
                </div>
                <div className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}>
                    <div className={`w-full pt-6 text-4xl font-bold text-center`}>
                        {firstPlan?.price}
                        <span className={`text-base`}> {firstPlan?.priceDetails}</span>
                    </div>
                </div>
              </div>
            : 
              <div className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>          
                <div className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}>
                    <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                        {firstPlan?.name}
                    </div>
                    <ul className={`w-full text-center text-sm`}>
                        {firstPlan?.features.map((feature) => (
                            <li
                                className={`border-b py-4`}
                                key={`${firstPlan?.name}-${feature}`}
                            >
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}>
                    <div className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center `}>
                        {firstPlan?.price}
                        <span className={`text-base`}> {firstPlan?.priceDetails}</span>
                    </div>
                </div>
              </div>
            }

        {/* Second Item */}

          {isHovering2
          ? 
          <div className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`} onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>  
            <div className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`} >
                <div className={`w-full p-8 text-3xl font-bold text-center`}>
                    {secondPlan?.name}
                </div>
            <div className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}> </div>
            <ul className={`w-full text-center text-base font-bold`}>
                {secondPlan?.features.map((feature) => (
                    <li
                        className={`border-b py-4`}
                        key={`${secondPlan?.name}-${feature}`}
                    >
                        {feature}
                    </li>
                ))}
            </ul>
            </div>
            <div className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}>
                <div className={`w-full pt-6 text-4xl font-bold text-center`}>
                    {secondPlan?.price}
                    <span className={`text-base`}> {secondPlan?.priceDetails}</span>
                </div>
            </div>
            </div>
          : 
            <div className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`} onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>           
              <div className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}>
                  <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                      {secondPlan?.name}
                  </div>
                  <ul className={`w-full text-center text-sm`}>
                      {secondPlan?.features.map((feature) => (
                          <li
                              className={`border-b py-4`}
                              key={`${secondPlan?.name}-${feature}`}
                          >
                              {feature}
                          </li>
                      ))}
                  </ul>
              </div>
              <div className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}>
                  <div className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center `}>
                      {secondPlan?.price}
                      <span className={`text-base`}> {secondPlan?.priceDetails}</span>
                  </div>
              </div>
            </div>
          }

        {/* Third Item */}

          {isHovering3
          ? 
            <div className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`} onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>  
              <div className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`} >
                <div className={`w-full p-8 text-3xl font-bold text-center`}>
                    {thirdPlan?.name}
                </div>
              <div className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}> </div>
                <ul className={`w-full text-center text-base font-bold`}>
                  {thirdPlan?.features.map((feature) => (
                    <li
                        className={`border-b py-4`}
                        key={`${thirdPlan?.name}-${feature}`}
                    >
                        {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}>
                <div className={`w-full pt-6 text-4xl font-bold text-center`}>
                    {thirdPlan?.price}
                    <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
                </div>
              </div>
            </div>
          : 
            <div className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`} onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>           
              <div className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}>
                <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                    {thirdPlan?.name}
                </div>
                <ul className={`w-full text-center text-sm`}>
                    {thirdPlan?.features.map((feature) => (
                      <li
                          className={`border-b py-4`}
                          key={`${thirdPlan?.name}-${feature}`}
                      >
                          {feature}
                      </li>
                    ))}
                </ul>
              </div>
              <div className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}>
                  <div className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center `}>
                      {thirdPlan?.price}
                      <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
                  </div>
              </div>
            </div>
          }

        {/* Fourth Item - If needed, add 'fourthPlan' to items arr and follow state management*/}

        {/* const [isHovering4, setIsHovered4] = useState(false);
            const onMouseEnter4 = () => setIsHovered4(true);
            const onMouseLeave4 = () => setIsHovered4(false); */}

          {/* {isHovering4
          ? 
            <div className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`} onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}>  
              <div className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`} >
                <div className={`w-full p-8 text-3xl font-bold text-center`}>
                    {fourthPlan?.name}
                </div>
              <div className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}> </div>
                <ul className={`w-full text-center text-base font-bold`}>
                  {fourthPlan?.features.map((feature) => (
                    <li
                        className={`border-b py-4`}
                        key={`${fourthPlan?.name}-${feature}`}
                    >
                        {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}>
                <div className={`w-full pt-6 text-4xl font-bold text-center`}>
                    {fourthPlan?.price}
                    <span className={`text-base`}> {fourthPlan?.priceDetails}</span>
                </div>
              </div>
            </div>
          : 
            <div className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`} onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}>           
              <div className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}>
                <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                    {fourthPlan?.name}
                </div>
                <ul className={`w-full text-center text-sm`}>
                    {fourthPlan?.features.map((feature) => (
                      <li
                          className={`border-b py-4`}
                          key={`${fourthPlan?.name}-${feature}`}
                      >
                          {feature}
                      </li>
                    ))}
                </ul>
              </div>
              <div className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}>
                  <div className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center `}>
                      {fourthPlan?.price}
                      <span className={`text-base`}> {fourthPlan?.priceDetails}</span>
                  </div>
              </div>
            </div>
          } */}
            
        </div>
      </div>
    </section>
  );
};

export default Pricing;
