import React from 'react';
import footerlogo from '@/assets/footerlogo.png';
import github from '@/assets/github.svg';
import linkedin from '@/assets/linkedin.svg';
import twitter from '@/assets/twitter.svg';
import facebook from '@/assets/facebook.svg';
import whatsapp from '@/assets/whatsapp.svg';


export const Footer: React.FunctionComponent = () => {
  return (
<footer className="bg-[#0E162A] mt-[6.14rem] h-[82vh] border-2 border-red-500 dark:bg-gray-900 w-full">

    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

        <div className='flex border-2 justify-center items-center'>

            <div className="flex flex-col gap-[4rem] border-2 border-yellow-500">
                
            <div className="w-full flex justify-center items-center border-2">
                <img src={footerlogo} className='w-[10.125rem] h-[5.625rem]' alt="logo" />
            </div>

          <div>
            <ul className='flex gap-[2.75rem]'>
                <li>Home</li>
                <li>About</li>
                <li>Blogs</li>
                <li>Projects</li>
                <li>Resume</li>
            </ul>
          </div>

          <div>
            <ul className='flex justify-center gap-[2.75rem]'>
                <li>
                    <a href="https://github.com/sahil143">
                        <img src={github} className='w-[2.5rem] h-[2.5rem]' alt="github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sahil-shah-7019051a5>">
                        <img src={twitter} className='w-[2.5rem] h-[2.5rem]' alt="linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sahil-shah-7019051a5>">
                        <img src={facebook} className='w-[2.5rem] h-[2.5rem]' alt="linkedin" />
                        </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sahil-shah-7019051a5>">
                        <img src={whatsapp} className='w-[2.5rem] h-[2.5rem]' alt="linkedin" />
                        </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sahil-shah-7019051a5>">
                        <img src={linkedin} className='w-[2.5rem] h-[2.5rem]' alt="linkedin" />
                        </a>
                </li>
            </ul>
          </div>
        </div>
        </div>


        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}
