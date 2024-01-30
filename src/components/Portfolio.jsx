import React from 'react';
import bsa from '../assets/portfolio/bsa.jpg';
import fm from '../assets/portfolio/fm.jpg';
import mundibia from '../assets/portfolio/mundibia.jpg';


const Portfolio = () => {
  const openBsaDemo = () => {
    const bsaLink = "https://book-store-app-v3.vercel.app/";
    window.open(bsaLink, '_blank');
  };
  const openBsaCode = () => {
    const bsaCode = "https://github.com/ewalawrence/nextjs-fullstack-bookstore-app-with-sign-up-and-auth.git";
    window.open(bsaCode, '_blank');
  };


  const openMundibiaDemo = () => {
    const bsaLink = "https://simple-static-page-website.vercel.app/";
    window.open(bsaLink, '_blank');
  };
  const openMundibiaCode = () => {
    const mundibiaCode = "https://github.com/ewalawrence/simple-static-page-website.git";
    window.open(mundibiaCode, '_blank');
  };


  const openfmDemo = () => {
    const fmLink = "https://sign-in-and-sign-up-form.vercel.app/sign-up";
    window.open(fmLink, '_blank');
  };
  const openfmCode = () => {
    const fmCode = "https://github.com/ewalawrence/sign-in-and-sign-up-form.git";
    window.open(fmCode, '_blank');
  };
   
 
    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b pt-11 from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-9 pl-12 lg:pl-0 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline underline border-gray-500">
              Portfolio
            </p>
            <p className="">Check out some of my works right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={bsa}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button onClick={openBsaDemo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button onClick={openBsaCode} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>


              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={mundibia}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button onClick={openMundibiaDemo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button onClick={openMundibiaCode} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>


              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={fm}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button onClick={openfmDemo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button onClick={openfmCode} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>


              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  // src={ldn}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button  className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                   Next project loading...
                  </button>
                 
                </div>
              </div>
              






     

      
          
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  

  