import React from 'react';
import Image from 'next/image';
import HuluLogo from '../images/Hulu_Logo.svg.png'
import HeaderItem from './HeaderItem';
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title='HOME' Icon={HomeIcon} />
            <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
            <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
            <HeaderItem title='COLLECTION' Icon={CollectionIcon} />
            <HeaderItem title='SEARCH' Icon={SearchIcon} />
            <HeaderItem title='ACCOUNT' Icon={UserIcon} />
        </div>
        <Image 
        className='object-contain'
            src={HuluLogo}
            width={100}
            height={35}
            alt='image'
        />
    </header>
  )
}

export default Header