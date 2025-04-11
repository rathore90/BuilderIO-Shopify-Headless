"use client";
import Image from 'next/image'

interface ArticleBenefitComponentProps {
    articleBenefitBackgroundColor?: any
    articleBenefitCardBackground?: any
    articleBenefitTextColor?: any
    articleBenefitList?: any
}

function ArticleBenefitComponent( {articleBenefitBackgroundColor, articleBenefitCardBackground, articleBenefitTextColor, articleBenefitList }: ArticleBenefitComponentProps) {
    return (
        <div style={{ background: articleBenefitBackgroundColor }} className='max-w-[960px] m-auto rounded-xl grid sm:grid-cols-2 gap-6 sm:gap-12 w-full py-16 px-6 lg:px-32'>
            { articleBenefitList?.map((item: any, index: any) => (
                <div style={{ background: articleBenefitCardBackground, boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.50)" }} key={index} className="py-6 px-8 flex flex-col items-center justify-center gap-4">
                    {item.articleBenefitTopIcon && <Image
                        src={ item.articleBenefitTopIcon }
                        width={92}
                        height={92}
                        className='object-contain w-[80px] h-[80px]'
                        quality={90}
                        alt='Herbaly Marketplace'
                    />}
                    <p className="font-bold text-center text-[28px] leading-[36px]" style={{ color: articleBenefitTextColor }}>{ item?.articleBenefitText }</p>
                    {item.articleBenefitBottomIcon && <Image
                        src={ item.articleBenefitBottomIcon }
                        width={64}
                        height={64}
                        className='object-contain w-[50px] h-[50px]'
                        quality={90}
                        alt='Herbaly Marketplace'
                    />}
                </div>
            ))}
        </div>
    )
}

export default ArticleBenefitComponent;