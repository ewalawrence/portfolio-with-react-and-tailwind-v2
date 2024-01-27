import React from 'react';
const About = () => {
  return (
    <div 
    name="about" className='w-ful h-screen bg-gradient-to-b from-gray-800
    to-black text-white'
    >
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
    w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 
            bordeer-gray-500'
            >
                About
        </p>
        </div>

             <p className='text-xl mt-20'>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Asperiores praesentium necessitatibus consectetur voluptates 
                ad deserunt inventore? Impedit similique doloremque quis ab! 
                Incidunt ipsam animi eos magni doloribus asperiores ut iste 
                accusantium illo distinctio tempore, temporibus officiis veniam 
                quod dignissimos eligendi delectus? Earum porro sapiente, aut 
                id debitis perspiciatis reiciendis dolorem.
            </p> 
            <br />
             <p className='text-xl'>
                
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Quod neque facilis accusantium earum molestias eaque ab 
                esse consectetur vitae illum totam eligendi, expedita a? 
                Laborum temporibus autem inventore distinctio illum?
             </p>
    </div>
</div>
  );
};

export default About;
