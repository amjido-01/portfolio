import mdHireArrow from '@/assets/mdHireArrow.svg';
import smHireArrow from '@/assets/smHireArrow.svg';
import { Input } from './input';
import { Label } from './label';
export const Contact = () => {
  return (
    <div className="border-2 md:mt-[13.52rem]">
         <div className="flex md:gap-[12.5rem] mx-auto w-[90%] lg:w-[85%] border-2">

        <div className="text-[#fff] text-[1.5rem] montserrat md:text-[2.14306rem] style font-black capitalize">
            <h2>want to collaborate <br/> or <span className="gradient-text">hire me.</span></h2>
            <img src={smHireArrow} alt="arrow" className='block md:hidden mt-[2.81rem]'/>
            <img src={mdHireArrow} className='hidden md:block mt-[4.29rem]' alt="arrow" />
        </div>

        <div className='border-2 md:w-[37.02706rem]'>
            <h3 className='text-[#eee] montserrat text-[1rem] md:text-[1.90494rem] style font-bold capitalize'>leave a message</h3>

            <div>
                <form className='mt-[1.62rem]'>
                    <div>
                        <Label htmlFor='email' className='text-[#696969] montserrat text-[0.71438rem] style font-normal'>Email</Label>
                        <Input type="email" id='email' className=' placeholder:text-[#696969] placeholder:lato placeholder:text-[0.5rem] placeholder:md:text-[0.71438rem] font-normal lowercase bg-transparent' placeholder="example@gmail.com" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
