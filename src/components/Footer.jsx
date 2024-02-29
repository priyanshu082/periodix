import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (

    <div className="backgroundCursorDiv flex flex-col h-[300px] poppins2">

 <div className=" flex flex-col sm:flex-row justify-around pt-[20px] sm:pt-[45px] w-[100%] border-t-[2px] border-zinc-700 mt-[20px]  h-[240px]">
      <div className="flex flex-col w-[35%]">
        <div className="font1 font-bold text-zinc-300 text-[25px]">
          PERIODIX
        </div>
        <div className="text-zinc-400 text-[14px]">
          "The place where you can learn anything and everything about elements
          by which our universe is made of."
        </div>
      </div>

      {/* about periodix */}
      <div className="flex flex-col w-[40%]">
        <div className="font1 font-bold text-zinc-300 text-[25px]">
          ABOUT ME
        </div>
        <div className="text-zinc-400 text-[14px]">
          "Hello! I'm Priyanshu Singh, a passionate and dedicated individual and a keen interest in the world of technology. Currently, I am pursuing my education at ZHCET, AMU, where I am majoring in Computer Engineering. I delve into the intricate world of web development and hone my skills in solving complex problems through Data Structures and Algorithms."
        </div>
      </div>

    </div>
    
    <div className=" border-zinc-500 text-zinc-300 py-[10px] text-[15px] tracking-tighter flex flex-row text-center justify-center">
            <p>Developed By Priyanshu Singh</p>
            <a href='https://github.com/priyanshu082' target="_blank" rel="noopener noreferrer" className='ml-[10px] pb-[4px]'>
  <GitHubIcon className='  w-[20px] h-[20px] text-cyan-600'/>
</a> 

<a href='https://www.linkedin.com/in/priyanshu-singh-a81975253/' target="_blank" rel="noopener noreferrer" className='ml-[10px] pb-[4px]'>
  <LinkedInIcon className='  w-[20px] h-[20px] text-cyan-600'/>
  </a>
    </div>
    </div>
   
  );
};

export default Footer;
