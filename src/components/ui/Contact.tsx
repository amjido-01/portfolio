import React from 'react';
import { motion } from 'framer-motion';
import mdHireArrow from '@/assets/mdHireArrow.svg';
import smHireArrow from '@/assets/smHireArrow.svg';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
import { Button } from './button';

const socials = [
  {
    label: "GitHub",
    handle: "@amjidoAli",
    href: "https://github.com/amjidoAli",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    handle: "@amjido_",
    href: "https://x.com/amjido_",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "amjido-ali",
    href: "https://linkedin.com/in/amjido-ali",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    handle: "+234 000 000 0000",
    href: "tel:+2340000000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.48 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.36.28 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.8z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "amjido.ali",
    href: "https://facebook.com/amjido.ali",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

export const Contact: React.FunctionComponent = () => {
  return (
    <div className="mt-[10.36rem] md:mt-[14.42rem]">
      <div className="mx-auto w-[90%] lg:w-[80%] px-4 md:px-0">

        {/* ── Social cards + availability row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-[3.5rem] md:mb-[5rem]"
        >
          {/* Availability badge */}
          <div className="flex justify-center mb-[2rem]">
            <div className="inline-flex items-center gap-[0.6rem] bg-[#0d1f12] border border-green-500/30 text-green-400 text-[0.78rem] md:text-[0.875rem] font-medium montserrat px-[1.2rem] py-[0.5rem] rounded-full">
              <span className="relative flex h-[0.55rem] w-[0.55rem]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[0.55rem] w-[0.55rem] bg-green-500"></span>
              </span>
              Available for work
            </div>
          </div>

          {/* Social cards */}
          <div className="flex flex-wrap justify-center gap-[0.75rem] md:gap-[1rem]">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="flex items-center gap-[0.75rem] bg-[#1a2235] border border-white/25 hover:border-white/50 hover:shadow-[0_0_20px_rgba(147,71,251,0.2)] text-white px-[1.25rem] py-[0.85rem] rounded-[0.85rem] transition-all duration-200 cursor-pointer group"
              >
                <span className="text-white">
                  {s.icon}
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-[0.65rem] text-[#888] montserrat uppercase tracking-wider">{s.label}</span>
                  <span className="text-[0.82rem] md:text-[0.9rem] text-[#c9d1e0] font-semibold sub-intro">{s.handle}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── Existing hire + form layout ── */}
        <div className="flex flex-col md:flex-row gap-[3rem] md:items-center md:justify-between">
          <div className='md:w-[26.1875rem]'>
            <h2 className="text-[#fff] text-[1.5rem] montserrat md:text-[2.25rem] style font-black capitalize">
              want to collaborate <br /> or{" "}
              <span className="gradient-text text-[1.5rem] montserrat md:text-[2.25rem] style font-black capitalize">
                hire me.
              </span>
            </h2>
            <img src={smHireArrow} alt="arrow" className='block md:hidden mt-[2.81rem]' />
            <img src={mdHireArrow} className='hidden md:block mt-[4.29rem]' alt="arrow" />
          </div>

          <div className='md:w-[39.02704rem]'>
            <h3 className='text-[#eee] montserrat text-[1rem] md:text-[1.90494rem] style font-bold capitalize'>
              leave a message
            </h3>
            <div>
              <form className='mt-[1.62rem]'>
                <div>
                  <Label htmlFor='email' className='montserrat text-[0.71438rem] style font-normal poppins md:text-[1.19056rem] style leading-normal capitalize text-[#fff]'>Email</Label>
                  <Input type="email" id='email' placeholder="example@gmail.com" className='poppins' />
                </div>
                <div className='mt-[1.25rem] md:mt-[1.62rem]'>
                  <Label htmlFor='name' className='montserrat text-[0.71438rem] style font-normal md:text-[1.19056rem] style leading-normal capitalize text-[#fff]'>Name</Label>
                  <Input type="text" id='name' className="placeholder:capitalize" placeholder="muhammad ni'imatullahi" />
                </div>
                <div className='mt-[1.25rem] md:mt-[1.62rem]'>
                  <Label htmlFor='message' className='montserrat text-[0.71438rem] style font-normal md:text-[1.19056rem] style leading-normal capitalize text-[#fff]'>Message</Label>
                  <Textarea id='message' className="placeholder:capitalize" placeholder="write your message here" />
                </div>
                <div className='mt-[1.25rem] md:mt-[1.62rem]'>
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
    </div>
  );
};
