import React from 'react'
import aboutImg from "../Assets/Images/sign_up_img.png";

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className='mt-12 md:w-11/22 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={aboutImg} alt='about_image' />
          </div>

          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl  font-semibold mb-4 md:w-45 text-justify'>The unseen of spending three years at Pixelgrade</h2>
            <p className='md:w-13 text-green-400mb-8 text-justify text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <a href="#register" class="bg-[#C80036] text-md ml-[-45%] xs:ml-[50%] mr-20 text-white px-6 mt-5 py-1 inline-block h-10 text-justify  font-medium shadow-sm rounded transition-all duration-300 ease-in-out hover:-translate-y-2 ">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;