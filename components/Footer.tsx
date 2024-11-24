import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Готовы вывести <span className='text-purple'>свое</span> цифровое присутствие на новый уровень?</h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Свяжитесь со мной сегодня и давайте обсудим, как я могу вам помочь в достижении ваших целей.</p>
            <a href="mailto:maksimus152519@gmail.com">
                <MagicButton title='Давайте свяжемся' icon={<FaLocationArrow />} position='right'/>
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Max</p>

            <div className='flex pt-4 items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} alt={profile.img} width={20} height={20} />
                    </div>
                ))}
            </div>
        </div> 
    </footer>
  )
}

export default Footer