import Image from 'next/image'
import Stars  from './../SVGs/stars'

interface HerbalyBagComparisonProps {
    bagComparisonSectionBackground?: any
    bagComparisonSectionHeading?: any
    bagComparisonHeadingColor?: any
    bagComparisonListTextColor?: any
    bagComparisonPositiveListIcon?: any
    bagComparisonNegativeListIcon?: any
    bagComparisonVersusIcon?: any
    bagComparisonLists?: any
    buttonObject?: any
    buttonLabelObject?: any
}

function HerbalyBagComparison( { bagComparisonSectionBackground, bagComparisonSectionHeading, bagComparisonHeadingColor, bagComparisonListTextColor, bagComparisonPositiveListIcon, bagComparisonNegativeListIcon, bagComparisonVersusIcon, bagComparisonLists, buttonObject, buttonLabelObject } : HerbalyBagComparisonProps) {
    return (
        <div>
            <div style={{ background: bagComparisonSectionBackground }} className="max-w-screen-2xl mx-auto py-12 hidden xl:block rounded-xl">
                <div style={{color: bagComparisonHeadingColor}} className="text-[35px] md:text-[40px] md:leading-[52px] text-center mb-8 xl:px-72" dangerouslySetInnerHTML={{ __html: bagComparisonSectionHeading || "" }}></div>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <h1 style={{ color: bagComparisonHeadingColor }} className='font-bold mb-4 text-[35px] max-w-[95%]'>{bagComparisonLists?.bagComparisonLeftHeading}</h1>
                        <div className='py-[26px] px-[30px] bg-white rounded-xl md:min-w-[450px]'>
                            { bagComparisonLists?.bagComparisonLeftList?.map((data: any, index: any) => (
                                <p style={{ color: bagComparisonListTextColor }} className="flex gap-2 items-center mb-[23px]" key={index}><span><img src={ bagComparisonPositiveListIcon } width={20} height={20} className="object-contain" alt="Herbaly Marketplace" loading='lazy' /></span>{ data?.bagComparisonLeftListTitle }</p>
                            ))}
                        </div>
                    </div>
  
                    { bagComparisonLists?.bagComparisonLeftImage && <Image
                            src={ bagComparisonLists?.bagComparisonLeftImage }
                            width={246}
                            height={358}
                            quality={90}
                            className='object-contain mr-[-30px] ml-[-30px] mt-[50px] z-10'
                            alt='Herbaly'
                            loading='lazy' 
                    />}
                    
                    <div className='z-50'>
                        <img 
                            src={bagComparisonVersusIcon} 
                            width={112}
                            height={112}
                            className="object-contain"
                            alt="Herbaly Marketplace"
                            loading='lazy' />
                    </div>

                    { bagComparisonLists?.bagComparisonRightImage && <Image
                        src={ bagComparisonLists?.bagComparisonRightImage }
                        width={246}
                        height={358}
                        quality={90}
                        className='object-contain mr-[-30px] ml-[-30px] mt-[50px] z-10'
                        alt='Herbaly'
                        loading='lazy' 
                    />}
                    
                    <div>
                        <h1 style={{ color: bagComparisonHeadingColor }} className='font-bold mb-4 text-[30px] text-right max-w-[95%] ml-0'>{bagComparisonLists?.bagComparisonRightListHeading}</h1>
                        <div className='py-[26px] px-[30px] bg-white rounded-xl md:min-w-[450px]'>
                            { bagComparisonLists?.bagComparisonRightList?.map((data: any, index: any) => (
                                <p style={{ color: bagComparisonListTextColor }} className="flex justify-end gap-2 items-center mb-[23px] text-right" key={index}>{ data?.bagComparisonRightListTitle }<span><img className="min-w-20" src={bagComparisonNegativeListIcon} /></span></p>
                            ))}
                        </div>
                    </div>
                </div>

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
            {/* Mobile */}
            <div style={{ background: bagComparisonSectionBackground }} className="px-4 py-12 block xl:hidden rounded-xl">
                <div style={{color: bagComparisonHeadingColor}} className="text-[35px] md:text-[40px] md:leading-[52px] text-center mb-8 xl:px-72" dangerouslySetInnerHTML={{ __html: bagComparisonSectionHeading || "" }}></div>
                <div>
                    <div className='flex justify-center items-center'>
                        <div className=''>
                            <h1 style={{ color: bagComparisonHeadingColor }} className='font-bold mb-4 text-[25px] sm:text-[30px]'>{bagComparisonLists?.bagComparisonLeftHeading}</h1>
                            <div className='py-[13px] px-[15px] sm:py-[26px] sm:px-[30px] bg-white rounded-xl md:min-w-[450px]'>
                                { bagComparisonLists?.bagComparisonLeftList?.map((data: any, index: any) => (
                                    <p style={{ color: bagComparisonListTextColor }} className="flex gap-2 items-center mb-[23px] mr-[25px]" key={index}><span><img src={bagComparisonPositiveListIcon} width={20} height={20} className="object-contain min-w-[20px]" alt="Herbaly Marketplace" loading='lazy' /></span>{ data?.bagComparisonLeftListTitle }</p>
                                ))}
                            </div>
                        </div>

                        { bagComparisonLists?.bagComparisonLeftImage && <Image
                                src={ bagComparisonLists?.bagComparisonLeftImage }
                                width={246}
                                height={358}
                                quality={90}
                                className='object-contain min-[600px]:mr-[-30px] ml-[-30px] mt-[100px] sm:mt-[50px] z-10 max-[600px]:w-[50%]'
                                alt='Herbaly'
                                loading='lazy' 
                        />}
                    </div>
                    
                    <div className='flex justify-center py-5'>
                        <img 
                            src={bagComparisonVersusIcon} 
                            width={112}
                            height={112}
                            className="object-contain"
                            alt="Herbaly Marketplace"
                            loading='lazy' />
                    </div>

                    <div className='flex justify-center items-center'>
                        { bagComparisonLists?.bagComparisonRightImage && <Image
                            src={ bagComparisonLists?.bagComparisonRightImage }
                            width={250}
                            height={358}
                            quality={90}
                            className='object-contain mr-[-30px] min-[600px]:ml-[-30px] z-10 max-[600px]:w-[50%]'
                            alt='Herbaly'
                            loading='lazy' 
                        />}
                        <div>
                            <h1 style={{ color: bagComparisonHeadingColor }} className='font-bold mb-4 text-[25px] sm:text-[30px] text-right ml-0'>{bagComparisonLists?.bagComparisonRightListHeading}</h1>
                            <div className='py-[13px] px-[15px] sm:py-[26px] sm:px-[30px] bg-white rounded-xl md:min-w-[450px]'>
                                { bagComparisonLists?.bagComparisonRightList?.map((data: any, index: any) => (
                                    <p style={{ color: bagComparisonListTextColor }} className="flex justify-end gap-2 items-center mb-[23px] text-right ml-[25px]" key={index}>{ data?.bagComparisonRightListTitle }<span><img width={20} height={20} className="object-contain min-w-[20px]" alt="Herbaly Marketplace" loading='lazy' src={bagComparisonNegativeListIcon} /></span></p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-6'>
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
                    <div className="flex justify-center px-4 min-[400px]:gap-2 mt-6">
                        { buttonObject?.reviewStars && <Stars color={ buttonObject?.reviewStarColor }/>}
                        { buttonObject?.reviewText && <p style={{ color: buttonObject?.reviewTextColor }} className='text-sm text-center'>{ buttonObject?.reviewText }</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HerbalyBagComparison;