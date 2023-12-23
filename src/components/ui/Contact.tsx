import mdHireArrow from '@/assets/mdHireArrow.svg';
import smHireArrow from '@/assets/smHireArrow.svg';
export const Contact = () => {
  return (
    <div className="border-2 md:mt-[13.52rem]">
         <div className="flex md:gap-[12.5rem] mx-auto w-[90%] lg:w-[85%] border-2">

        <div className="text-[#fff] text-[1.5rem] montserrat md:text-[2.14306rem] style font-black capitalize">
            <h2>want to collaborate <br/> or <span className="gradient-text">hire me.</span></h2>
            <img src={smHireArrow} alt="arrow" className='block md:hidden mt-[2.81rem]'/>
            <img src={mdHireArrow} className='hidden md:block mt-[4.29rem]' alt="arrow" />
        </div>

        <div>
            <h3 className='text-[#eee] montserrat text-[1rem] md:text-[1.90494rem] style font-bold capitalize'>leave a message</h3>
        </div>
    </div>
    </div>
  )
}
