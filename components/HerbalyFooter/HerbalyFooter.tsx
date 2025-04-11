"use client";
import Image from 'next/image'
import Link from 'next/link';

interface HerbalyFooterProps {
    FooterBackground?: any
    copyrightText?: any
    footerLogo?: any
    footerList?: any
    primaryTextColor?: any
}

function HerbalyFooter({ FooterBackground, copyrightText, footerLogo, footerList, primaryTextColor }: HerbalyFooterProps) {
    return (
        <div style={{ background: FooterBackground }}>
            <div className="max-w-screen-2xl m-auto px-6 sm:px-12 py-12">
                <div className="grid-container">
                    <div className="grid-item flex justify-center items-center">
                        <p style={{ color: primaryTextColor }} className='text-xs sm:text-[13px] max-[768px]:py-[14px]'>{ copyrightText }</p>
                    </div>
                    <div className="grid-item flex justify-center items-center">
                        <Image 
                            src= { footerLogo }
                            className="object-contain"
                            alt='Herbaly Marketplace'
                            width={162}
                            height={25}
                            quality={90}
                            loading='lazy'
                        />
                    </div>
                    <div className="grid-item flex justify-center items-center gap-4 flex-wrap">
                        {footerList?.map((data: any, index: any) => (
                            <Link className='text-[13px]' style={{ color: primaryTextColor }} key={index} target="_blank" href={ data?.footerLink }>{ data?.linkTitle }</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HerbalyFooter;