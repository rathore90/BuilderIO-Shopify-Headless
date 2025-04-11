"use client";
import Image from 'next/image'
import Stars  from './../SVGs/stars'

interface HerbalySubFooterProps {
    subFooterBackground?: any
    subFooterImage?: any
    heading?: any
    paragraph?: any
    buttonObject?: any
    buttonLabelObject?: any
}

function HerbalySubFooter( { subFooterBackground, subFooterImage, heading, paragraph, buttonObject, buttonLabelObject }: HerbalySubFooterProps) {
    return (
        <>
            {/* Desktop */}
            <div className="text-center lg:block hidden"  style={{ background: subFooterBackground }}>
                <div className="max-w-screen-2xl m-auto flex items-center">
                    <div className='px-16 py-20 w-[50%]'>
                        <h1 className="font-bold text-[40px]" style={{ color: heading?.headingTextcolor }}>{ heading?.subFooterHeading }</h1>
                        <div style={{ color: paragraph?.paragraphTextcolor }} dangerouslySetInnerHTML={{ __html: paragraph?.subFooterParagraph || " " }}></div>
                        <div className='w-full mt-6'>
                            <a style={{ marginBottom: buttonLabelObject != undefined? '24px': ''}} className="flex relative flex-col items-center max-sm:justify-center" href={ buttonObject?.buttonUrl }>
                                <div className="button py-4 px-12 rounded-[50px] flex gap-2" style={{ background: buttonObject?.buttonBackground, color: buttonObject?.buttonTextColor }}>
                                    <span className='text-xl font-bold leading-7'>{ buttonObject?.buttonText }</span>
                                    { buttonObject?.buttonIcon && <img 
                                        src={ buttonObject?.buttonIcon }
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                        alt="Herbaly Marketplace"
                                    /> }
                                </div>
                                { buttonLabelObject?.labelIcon && 
                                    <div style={{ background: buttonLabelObject?.labelBackground }} className='flex absolute bottom-[-18px] py-[5px] px-[42px] gap-2 items-center rounded-full'>
                                        <img width="25" height="25" className="w-4 object-contain" src={ buttonLabelObject?.labelIcon } alt="Herbaly Icon" />
                                        <p className="text-sm font-bold" style={{ color: buttonLabelObject?.labelTextColor }}>{ buttonLabelObject?.labelext }</p>
                                    </div> 
                                }
                            </a>
                            <div className="flex justify-center items-center gap-2 mt-4">
                                { buttonObject?.reviewStars && <Stars color={ buttonObject?.reviewStarColor }/>}
                                { buttonObject?.reviewText && <p style={{ color: buttonObject?.reviewTextColor }} className='text-sm text-center'>{ buttonObject?.reviewText }</p>}
                            </div>
                        </div>
                    </div>
                    <div className='px-4 w-[50%]'>
                        <Image
                            src={ subFooterImage }
                            width={924}
                            height={628}
                            quality={90}
                            className="object-contain h-full"
                            alt="Herbaly Marketplace"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div style={{ background: subFooterBackground }} className="mt-[150px] lg:hidden">
                <div className="px-4 -mt-[140px]">
                    <Image
                        src={ subFooterImage }
                        width={924}
                        height={628}
                        quality={90}
                        className="object-contain h-full"
                        alt="Herbaly Marketplace"
                        loading="lazy"
                    />
                </div>
                <div className='px-4 pb-8 mt-6'>
                    <h1 className="font-bold text-[40px]" style={{ color: heading?.headingTextcolor }}>{ heading?.subFooterHeading }</h1>
                    <div style={{ color: paragraph?.paragraphTextcolor }} dangerouslySetInnerHTML={{ __html: paragraph?.subFooterParagraph || " " }}></div>
                    <div className='w-full mt-6'>
                        <a style={{ marginBottom: buttonLabelObject != undefined? '24px': ''}} className="flex relative flex-col items-center max-sm:justify-center" href={ buttonObject?.buttonUrl }>
                            <div className="button py-4 px-12 rounded-[50px] flex gap-2" style={{ background: buttonObject?.buttonBackground, color: buttonObject?.buttonTextColor }}>
                                <span className='text-xl font-bold leading-7'>{ buttonObject?.buttonText }</span>
                                { buttonObject?.buttonIcon && <img 
                                    src={ buttonObject?.buttonIcon }
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                    alt="Herbaly Marketplace"
                                /> }
                            </div>
                            { buttonLabelObject?.labelIcon && 
                                <div style={{ background: buttonLabelObject?.labelBackground }} className='flex absolute bottom-[-18px] py-[5px] px-[42px] gap-2 items-center rounded-full'>
                                    <img width="25" height="25" className="w-4 object-contain" src={ buttonLabelObject?.labelIcon } alt="Herbaly Icon" />
                                    <p className="text-sm font-bold" style={{ color: buttonLabelObject?.labelTextColor }}>{ buttonLabelObject?.labelext }</p>
                                </div> 
                            }
                        </a>
                        <div className="flex justify-center px-4 min-[400px]:gap-2 mt-6">
                            { buttonObject?.reviewStars && <Stars color={ buttonObject?.reviewStarColor }/>}
                            { buttonObject?.reviewText && <p style={{ color: buttonObject?.reviewTextColor }} className='text-sm text-center'>{ buttonObject?.reviewText }</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HerbalySubFooter;