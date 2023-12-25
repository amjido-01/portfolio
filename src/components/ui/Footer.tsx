import React from 'react';
import footerlogo from '@/assets/footerlogo.png';
import github from '@/assets/github.svg';
import linkedin from '@/assets/linkedin.svg';
import twitter from '@/assets/twitter.svg';
import facebook from '@/assets/facebook.svg';
import whatsapp from '@/assets/whatsapp.svg';
import { Link } from 'react-router-dom';


export const Footer: React.FunctionComponent = () => {
  return (
<footer className="bg-[#0E162A] pt-[4rem] px-[2rem] md:p-[6rem] mt-[6.14rem] h-[70vh] md:h-[82vh] w-full relative bottom-0 left-0 right-0">

    <div className="w-full max-w-screen-xl mx-auto">

        <div className='flex justify-center items-center'>

            <div className="flex flex-col gap-[2.19rem] md:gap-[4rem]">
                
            <div className="w-full flex justify-center items-center">
                <img src={footerlogo} className='w-[6.75rem] h-[3.75rem] md:w-[10.125rem] md:h-[5.625rem]' alt="logo" />
            </div>

          <div>
            <ul className='flex text-[#fff] gap-[1.46rem] md:gap-[2.75rem] montserrat text-[0.875rem] md:text-[1.25rem] style font-bold leading-normal'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/blogs'>Blogs</Link>
                </li>
                <li>
                    <Link to='/projects'>Project</Link>
                </li>
                <li>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
          </div>

          <div>
            <ul className='flex justify-center gap-[2rem] md:gap-[2.75rem]'>
                <li>
                    <a href="https://github.com/sahil143">
                        <img src={github} className='w-[1.375rem] h-[1.375rem] :w-[2.5rem] :h-[2.5rem]' alt="github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sahil-shah-7019051a5>">
                        <img src={twitter} className='w-[1.375rem] h-[1.375rem] :w-[2.5rem] :h-[2.5rem]' alt="linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sahil-shah-7019051a5>">
                        <img src={facebook} className='w-[1.375rem] h-[1.375rem] :w-[2.5rem] :h-[2.5rem]' alt="linkedin" />
                        </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sahil-shah-7019051a5>">
                        <img src={whatsapp} className='w-[1.375rem] h-[1.375rem] :w-[2.5rem] :h-[2.5rem]' alt="linkedin" />
                        </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sahil-shah-7019051a5>">
                        <img src={linkedin} className='w-[1.375rem] h-[1.375rem] :w-[2.5rem] :h-[2.5rem]' alt="linkedin" />
                        </a>
                </li>
            </ul>
          </div>
        </div>
        </div>


        <hr className="my-[4rem] md:my-[4rem] sm:mx-auto lg:my-8" />
        <span className="block my-[4rem] md:my-[4rem] montserrat text-center style text-[0.625rem] md:text-[0.875rem] font-normal leading-normal capitalize  text-[#fff]">Copyright © 2023 All Rights Reserved alerntech</span>
    </div>
</footer>
  )
}
