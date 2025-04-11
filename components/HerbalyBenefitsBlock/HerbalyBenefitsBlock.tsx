import Image from 'next/image'
import Stars  from './../SVGs/stars'

interface HerbalyBenefitsBlockProps {
    benefitsBlock?: any   
    benefitsSectionBackground?: any
    benefitsSectionHeadingColor?: any
    benefitsSectionParagraphColor?: any
}

function HerbalyBenefitsBlock ( { benefitsBlock, benefitsSectionBackground, benefitsSectionHeadingColor, benefitsSectionParagraphColor } : HerbalyBenefitsBlockProps) {
    const buttonColor = benefitsBlock?.benefitsMiddleObject?.buttonObject?.buttonBackground;
    const buttonTextColor = benefitsBlock?.benefitsMiddleObject?.buttonObject?.buttonTextColor;
    return (
        <div> 
            <div style={{ background: benefitsSectionBackground }} className='max-w-screen-2xl mx-auto py-12'>  
                <div style={{ color: benefitsSectionHeadingColor }} className="text-[35px] md:text-[40px] md:leading-[52px] text-center sm:mb-8 px-6 sm:px-12 xl:px-72" dangerouslySetInnerHTML={{ __html: benefitsBlock?.benefitsSectionHeading || "" }}></div>
                <div className='grid xl:grid-cols-4 text-center'>      
                    <div>
                        {benefitsBlock?.benefitsLeftList?.map((data: any, index: any) => (
                            <div key={index} className='px-12 pt-8 xl:px-6 xl:py-4'>
                                <Image 
                                    src={ data?.benefitIcon }
                                    width={32}
                                    height={45}
                                    quality={90}
                                    className='object-cover xl:ml-auto mb-2 w-auto h-[45px]'
                                    alt='Herbaly'
                                    loading='lazy'
                                />
                                <h2 style={{ color: benefitsSectionHeadingColor }} className='text-[22px] text-left xl:text-right font-bold mb-2'>{ data?.benefitTitle }</h2>
                                <p style={{ color: benefitsSectionParagraphColor }} className='text-base text-left xl:text-right'> { data?.benefitDescription } </p>
                            </div>
                        ))}
                    </div>
                    <div className='xl:col-span-2 h-full w-full'>
                        <Image
                            src={ benefitsBlock?.benefitsMiddleObject?.benefitsMiddleImage }
                            width={633}
                            height={633}
                            quality={90}
                            className='object-contain m-auto w-full h-full max-[1280px]:px-12 max-[1280px]:pt-8'
                            alt='Herbaly'
                            loading='lazy'
                        />
                    </div>
                    <div>
                        {benefitsBlock?.benefitsRightList?.map((data: any, index: any) => (
                            <div key={index} className='px-12 pt-8 xl:px-6 xl:py-4'>
                                <Image 
                                    src={ data?.benefitIcon }
                                    width={32}
                                    height={45}
                                    quality={90}
                                    className='object-cover mb-2 w-auto h-[45px]'
                                    alt='Herbaly'
                                    loading='lazy'
                                />
                            <h2 style={{ color: benefitsSectionHeadingColor }} className='text-[22px] text-left font-bold mb-2'>{ data?.benefitTitle }</h2>
                            <p style={{ color: benefitsSectionParagraphColor }} className='text-base text-left'> { data?.benefitDescription } </p>
                        </div>
                        ))}
                    </div>
                </div>
                <div className='w-full mt-6'>
                    <a style={{ marginBottom: benefitsBlock?.benefitsMiddleObject?.buttonLabelObject != undefined? '24px': ''}} className="flex relative flex-col items-center max-sm:justify-center" href={  benefitsBlock?.benefitsMiddleObject?.buttonObject?.buttonUrl }>
                        <div className="button py-4 px-12 rounded-[50px] flex gap-2" style={{ background: buttonColor, color: buttonTextColor }} >
                            <span className='text-xl font-bold leading-7'>{ benefitsBlock?.benefitsMiddleObject?.buttonObject?.buttonText  }</span>
                            { benefitsBlock?.benefitsMiddleObject?.buttonObject?.buttonIcon  && <img 
                                src={ benefitsBlock?.benefitsMiddleObject?.buttonObject?.buttonIcon }
                                width={20}
                                height={20}
                                className="object-contain"
                                alt="Herbaly Marketplace"
                            /> }
                        </div>
                        { benefitsBlock?.benefitsMiddleObject?.buttonLabelObject?.labelIcon && 
                            <div style={{ background: benefitsBlock?.benefitsMiddleObject?.buttonLabelObject?.labelBackground }} className='flex absolute bottom-[-18px] py-[5px] px-[42px] gap-2 items-center rounded-full'>
                                <img width="25" height="25" className="w-4 object-contain" src={ benefitsBlock?.benefitsMiddleObject?.buttonLabelObject?.labelIcon } alt="Herbaly Icon" />
                                <p className="text-sm font-bold" style={{ color: benefitsBlock?.benefitsMiddleObject?.buttonLabelObject?.labelTextColor }}>{ benefitsBlock?.benefitsMiddleObject?.buttonLabelObject?.labelext }</p>
                            </div> 
                        }
                    </a>
                    <div className="flex justify-center px-4 min-[400px]:gap-2 mt-6">
                        { benefitsBlock?.benefitsMiddleObject?.buttonObject?.reviewStars && <Stars color={ benefitsBlock?.benefitsMiddleObject?.buttonObject?.reviewStarColor }/>}
                        { benefitsBlock?.benefitsMiddleObject?.buttonObject?.reviewText && <p style={{ color: benefitsBlock?.benefitsMiddleObject?.buttonObject?.reviewTextColor }} className='text-sm text-center'>{ benefitsBlock?.benefitsMiddleObject?.buttonObject?.reviewText }</p>}
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default HerbalyBenefitsBlock