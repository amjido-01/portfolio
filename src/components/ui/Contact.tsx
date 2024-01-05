import mdHireArrow from '@/assets/mdHireArrow.svg';
import smHireArrow from '@/assets/smHireArrow.svg';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
import { Button } from './button';

export const Contact: React.FunctionComponent = () => {
   
  return (
    <div className="mt-[10.36rem] md:mt-[14.42rem]">
         <div className="flex flex-col md:flex-row gap-[3rem] md:items-center md:gap-[11.5rem] mx-auto w-[90%] lg:w-[85%] px-2 md:px-0">

        <div className="text-[#fff] text-[1.5rem] montserrat md:text-[2.25rem] style font-black capitalize">
            <h2>want to collaborate <br/> or <span className="gradient-text">hire me.</span></h2>
            <img src={smHireArrow} alt="arrow" className='block md:hidden mt-[2.81rem]'/>
            <img src={mdHireArrow} className='hidden md:block mt-[4.29rem]' alt="arrow" />
        </div>

        <div className=' md:w-[37.02706rem]'>
            <h3 className='text-[#eee] montserrat text-[1rem] md:text-[1.90494rem] style font-bold capitalize'>leave a message</h3>

            <div>
                <form className='mt-[1.62rem]'>
                    <div className=''>
                        <Label htmlFor='email' className='montserrat text-[0.71438rem] style font-norma lato md:text-[1.19056rem] style font-semibold leading-normal capitalize text-[#fff]'>Email</Label>
                        <Input type="email" id='email' placeholder="example@gmail.com" />
                    </div>
                    <div className=' mt-[1.25rem] md:mt-[1.62rem]'>
                        <Label htmlFor='name' className='montserrat text-[0.71438rem] style font-norma lato md:text-[1.19056rem] style font-semibold leading-normal capitalize text-[#fff]'>Name</Label>
                        <Input type="text" id='name' placeholder="muhammad ni’imatullahi" />
                    </div>
                    <div className=' mt-[1.25rem] md:mt-[1.62rem]'>
                        <Label htmlFor='message' className='montserrat text-[0.71438rem] style font-norma lato md:text-[1.19056rem] style font-semibold leading-normal capitalize text-[#fff]'>Message</Label>
                        <Textarea id='message' placeholder="write your message here" />
                    </div>

                    <div className=' mt-[1.25rem] md:mt-[1.62rem]'>
                          <Button
                        size="lg"
                        className="btn text-[#fff] py-[0.65rem] rounded-[0.25rem] px-[2rem] md:w-[12.5rem] md:h-[3.125rem] md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] md:px-[4rem]"
                    >
                    send
                    </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
