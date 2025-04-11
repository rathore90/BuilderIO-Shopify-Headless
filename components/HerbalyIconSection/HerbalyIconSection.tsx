"use client";
import Image from 'next/image'

interface HerbalyIconSectionProps {
    bannerIconLabel?: any
}

function HerbalyIconSection({ bannerIconLabel }: HerbalyIconSectionProps) {

  return (
    <div className='max-w-screen-2xl m-auto my-6'>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-4 px-2">
            {bannerIconLabel.map((data: any, index: any) => (
                <div key={ index } className="flex gap-[0.5rem] sm:gap-3 items-center">
                    <Image 
                        src={ data?.image }
                        width={80}
                        height={80}
                        className="object-contain"
                        alt="Herbaly Marketplace"
                        loading="lazy"
                    />                 
                    <p style={{ color: data?.textColor }} className="leading-[30px] text-base lg:text-lg font-bold">{data?.text}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default HerbalyIconSection;
