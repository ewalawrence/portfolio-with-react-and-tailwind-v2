import React from 'react';
import heroImage from '../assets/heroImage.jpg'
import { RiArrowRightSLine } from "react-icons/ri";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen pb-11 pt-12 w-full bg-gradient-to-b
     from-black via-black to-gray-800'>
{/* this will make the things here to align to center */}
{/* md:flex-row makes the image and text in column orientation
in smaller screen and row oriented in large screen view */}
        <div className='max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row' >
            <div className='flex flex-col justify-center h-full '>
            <h2 className='text-4xl font-bold text-white pt-12 mt-11'>
                Hello there, I'm a Full Stack Developer
            </h2>
            <p className='text-gray-500 lg:py-4 max-w-md'>
            I possess a two-year track record in crafting and architecting
             software solutions. Presently, my focus revolves around the
             development of web applications, leveraging technologies such 
             as React, NextJS, PostgreSQL, and Prisma. Additionally, I am 
             adept at utilizing web-based platforms and services such as 
             Git and GitHub in my work.
            </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 flex 
                    items-center rounded-md bg-gradient-to-r from-cyan-500
                    to-blue-500 cursor-pointer my-5'>
                      portfolio
                      {/* to add animation we will add styling to the span 
                      containing the icon */}
                        <span className='group-hover:rotate-90 duration-300
                         '>
{/* at this point the hovering is only affecting the icon, to make it affect the
both the button and the icon, we add a new class called group to the button and 
attach group to the hover in the span */}
                            <RiArrowRightSLine size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
            <img src={heroImage}
                alt="my profile" 
                className="rounded-2xl mx-auto w-2/3 md:w-full" 
                />
            </div>
        </div>
    </div>
  )
}

export default Home;

 






