import Image from 'next/image'
import Stars  from './../SVGs/stars'
import React, { useEffect } from "react";

interface HerbalyBannerProps {
    firstSection?: any
    bannerImage?: any
    bannerMobileImage?: any
    heading?: any
    paragraph?: any
    bannerBackground?: string
    bannerIconLabel?: any 
    buttonObject?: any
    bannerQuotes?: any
    WisitaVideoScript?: any
    bannerButtonPositioning?: any
    buttonLabelObject?: any
}

function HerbalyBanner({ firstSection, bannerImage, heading, paragraph, bannerBackground, bannerIconLabel, buttonObject, bannerMobileImage, bannerQuotes, WisitaVideoScript, bannerButtonPositioning, buttonLabelObject }: HerbalyBannerProps) {

    useEffect(() => {
        if(WisitaVideoScript != undefined) {
            const video_container = document.getElementsByClassName('herbaly__banner__video')[0];
            video_container.innerHTML = WisitaVideoScript;
        }
    }, []);

  return (
    <> 
        <div style={{ background: bannerBackground }}>
            <div className="grid min-[1025px]:grid-cols-2 gap-4 items-center lg:max-w-screen-2xl m-auto py-12 max-[1024px]:px-14 max-[600px]:px-6">
                <div className="lg:pl-10">
                    <div className="block min-[600px]:flex justify-between">
                        <Image
                            src={ firstSection?.image }
                            width={200}
                            height={30}
                            quality={90}
                            className="object-contain max-[600px]:m-auto"
                            alt="Herbaly Marketplace"
                            priority
                        /> 
                        <p className="uppercase text-base min-[391px]:text-lg rounded py-[4px] px-[15px] font-bold text-center max-[600px]:mt-5" style={{ background: firstSection?.labelBackground, color: firstSection?.labelTextColor }} >{ firstSection?.text }</p>
                    </div>
                    <h1 style={{ color: heading?.headingTextcolor }} className='banner'>{ heading?.bannerHeading }</h1>
                    { WisitaVideoScript != undefined ? <div className='mb-5 herbaly__banner__video'>Video</div> : <div className='herbaly__banner__video'></div>}
                    {/* After Video */}
                    { bannerButtonPositioning && <div className='flex gap-2 flex-col sm:flex-row mb-5'>
                        <a style={{ marginBottom: buttonLabelObject != undefined? '16px': ''}} className="flex relative flex-col items-center max-sm:justify-center" href={ buttonObject?.buttonUrl }>
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
                        <div className="flex flex-col items-center sm:items-baseline sm:justify-center gap-0.5">
                            { buttonObject?.reviewStars && <Stars color={ buttonObject?.reviewStarColor }/>}
                            { buttonObject?.reviewText && <p style={{ color: buttonObject?.reviewTextColor }} className='text-sm'>{ buttonObject?.reviewText }</p>}
                        </div>
                    </div> }
                    <div className="block max-sm:grid max-sm:grid-cols-3 items-center">
                        <div className="max-sm:col-span-2">
                            <p style={{ color: paragraph?.paragraphTextcolor }} className=''>{ paragraph?.bannerParagraph }</p>
                            <div className="flex gap-4 my-5 flex-wrap">
                                {bannerIconLabel.map((data: any, index: any) => (
                                    <div key={ index } className="flex gap-1.5 items-center">
                                        <Image 
                                            src={ data?.image }
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                            alt="Herbaly Marketplace"
                                            priority
                                        />                 
                                        <p style={{ color: data?.textColor }} className="leading-[30px] text-lg max-sm:text-sm">{data?.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        { bannerMobileImage && (
                            <Image 
                                src={ bannerMobileImage }
                                width={135}
                                height={190}
                                className="object-contain hidden max-sm:block"
                                alt="Herbaly Marketplace"
                                priority
                            />
                        )}
                    </div>
                    { !bannerButtonPositioning && buttonObject?.buttonUrl &&
                    <div className='flex gap-2 flex-col sm:flex-row'>
                        <a style={{ marginBottom: buttonLabelObject != undefined? '16px': ''}} className="flex relative flex-col items-center max-sm:justify-center" href={ buttonObject?.buttonUrl }>
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
                        <div className="flex flex-col items-center sm:items-baseline sm:justify-center gap-0.5">
                            { buttonObject?.reviewStars && <Stars color={ buttonObject?.reviewStarColor }/>}
                            { buttonObject?.reviewText && <p style={{ color: buttonObject?.reviewTextColor }} className='text-sm'>{ buttonObject?.reviewText }</p>}
                        </div>
                    </div>}
                    <div className='flex items-center gap-4 mt-5'>
                        { bannerQuotes?.image && <Image 
                            src={ bannerQuotes?.image }
                            width={80}
                            height={80}
                            className="object-contain w-[75px] h-[75px]"
                            alt="Herbaly Marketplace"
                            priority
                        />
                        }   
                        <div>
                            <p style={{ color: '#797979' }} className='text-base font-medium'>{ bannerQuotes?.quote }</p>
                            <div className='flex gap-2 mt-1'>
                                <p style={{ color: '#706861' }} className='text-xs' > { bannerQuotes?.userName } </p>
                                { bannerQuotes?.verifiedCustomer?.image && <Image 
                                    src={ bannerQuotes?.verifiedCustomer?.image }
                                    width={12}
                                    height={12}
                                    className="object-contain"
                                    alt="Herbaly Marketplace"
                                    priority
                                />}
                                <p style={{ color: '#706861' }} className='text-xs' > { bannerQuotes?.verifiedCustomer?.text } </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:w-auto m-auto hidden sm:block">
                    <Image
                        src={ bannerImage }
                        width={600}
                        height={600}
                        quality={90}
                        className="object-contain"
                        alt="Herbaly Marketplace"
                        priority
                    /> 
                </div>
            </div>    
        </div> 
    </>
  );
}

export default HerbalyBanner;
