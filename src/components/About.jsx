import React from 'react';
const About = () => {
  return (
    <div 
    name="about" className='w-ful lg:h-screen pt-11  bg-gradient-to-b  from-gray-800
    to-black text-white'
    >
    <div className='max-w-screen-lg p-4   mx-auto flex flex-col justify-center
    w-full h-full'>
        <div className='pb-2 '>
            <p className='text-4xl  font-bold inline border-b-4 
            bordeer-gray-500'
            >
                About
        </p>
        </div>

             <p className='text-xl '>
             Hello, I'm Ewa Lawrence, 
             a passionate and skilled 
             Full Stack Developer with a solid
              foundation in web development. 
              With two years of hands-on 
              experience, I've honed my 
              expertise in crafting 
              robust and efficient 
              solutions using cutting-edge 
              technologies.

            </p> 
         
             <br />

             <p className='text-2xl font-bold inline underline 
            bordeer-gray-500'
            >
               What drives me?
            </p>
            Passion fuels my work. I'm driven by the excitement of creating innovative solutions that make a real 
            impact. Whether it's optimizing code for efficiency, 
            designing an intuitive user interface, or integrating cutting-edge technologies, I relish every challenge 
            that comes my way.
            <br /> 
            <p className='text-2xl font-bold inline underline
            bordeer-gray-500'
            >
              Beyond the Code
            </p>
            
            <p>        
            As a fullstack developer, I derive joy and balance in life through diverse hobbies, specifically music and sports.
            Music provides a creative outlet and a break from the logical thinking of coding, while sports contribute to overall 
            well-being, instilling discipline and teamwork skills. These hobbies not only 
            bring joy but also enhance problem-solving skills, creating a well-rounded and dynamic approach to both personal and 
            professional pursuits.
           </p>
           <br />
           <p className='text-2xl font-bold inline underline 
            bordeer-gray-500'
            >
              Let's Collaborate!
            </p>
            
            <p>
            I'm always open to new opportunities and collaborations. If you have a project or idea that could benefit 
            from my expertise, don't hesitate to reach out. I'm excited about the prospect of working together to create something 
            extraordinary.
          
            <br /> 
            Cheers, 
            <br />
            Ewa Lawrence
            </p>
      </div>    
</div>
  );
};

export default About;
