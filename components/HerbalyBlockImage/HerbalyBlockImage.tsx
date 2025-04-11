
"use client";
import Image from 'next/image'

interface HerbalyBlockImageProps {
    textImageComponent?: any
    backgroundBlockImageSection?: string
}

function HerbalyBlockImage( { textImageComponent, backgroundBlockImageSection }: HerbalyBlockImageProps) { 
    return (
        <div style={{ background: backgroundBlockImageSection }} className="overflow-hidden">
            <div className="px-5 mx-auto 2xl:max-w-screen-2xl 2xl:mx-auto rounded-xl">
                <div className="mx-auto flex flex-wrap">
                    {textImageComponent && <Image 
                        src= { textImageComponent?.image }
                        className="lg:w-1/2 w-full lg:h-auto h-96 object-cover object-center rounded-tl-xl max-[1024px]:rounded-tr-xl lg:rounded-tl-xl lg:rounded-bl-xl"
                        alt='Herbaly Marketplace'
                        width={500}
                        height={500}
                        quality={90}
                        loading='lazy'
                    />}
                <div style={{ background: textImageComponent?.textSectionBackground }} className='p-5 sm:py-[70px] sm:px-[80px] rounded-br-xl max-[1024px]:rounded-bl-xl lg:rounded-tr-xl lg:rounded-br-xl lg:w-1/2 w-full lg:mt-0'>
                    <h2 style={{ color: textImageComponent?.headingTextColor }} className='text-4xl sm:text-[40px] sm:leading-[50px] mb-9 font-bold'>{ textImageComponent?.heading }</h2>
                    <div style={{ color: textImageComponent?.paragraphTextColor }} dangerouslySetInnerHTML={{ __html: textImageComponent?.paragraph || " " }}></div>
                        <div className='block sm:flex gap-2'>
                        <p style={{ color: textImageComponent?.paragraphTextColor }} className='text-base mb-2 sm:mb-0'>{ textImageComponent?.mediaSection?.text }</p>
                        <div className='flex gap-2'>
                            {textImageComponent?.mediaSection?.mediaImages && textImageComponent?.mediaSection?.mediaImages?.map((mediaData: any, index: any) => (
                                <Image 
                                    key={index}
                                    src={ mediaData?.mediaImage }
                                    width={84}
                                    height={30}
                                    className="object-contain"
                                    alt="Herbaly Marketplace"
                                    loading='lazy'
                                />
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HerbalyBlockImage;