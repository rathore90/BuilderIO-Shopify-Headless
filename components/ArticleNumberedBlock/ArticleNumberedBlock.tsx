"use client";
import Image from 'next/image'

interface ArticleNumberedBlockProps {  
    articleNumberedBackground?: any    
    articleNumberedHeadingColor?: any
    articleNumberedParagraphColor?: any  
    articleNumberedBorderTop?: any
    articleNumberedSection?: any
 }

function ArticleNumberedBlock( {articleNumberedBackground, articleNumberedHeadingColor, articleNumberedParagraphColor, articleNumberedBorderTop, articleNumberedSection} : ArticleNumberedBlockProps){
    return (   
        <div style={{ background: articleNumberedBackground }}className='max-w-[960px] m-auto rounded-xl'>
            <div className='py-6 sm:py-12 px-8'>
                { articleNumberedBorderTop && 
                <Image 
                    src={ articleNumberedBorderTop } 
                    width={283} height={8} 
                    className="object-contain pb-4" 
                    alt="Herbaly Marketplace" 
                    quality={90}
                    loading="lazy" /> }
                <h1 className="pb-4 text-[45px] font-bold leading-[60px]" style={{ color: articleNumberedHeadingColor }}>{ articleNumberedSection?.articleNumberedHeading }</h1>
                { articleNumberedSection?.articleNumberedImage &&
                <Image 
                    src={ articleNumberedSection?.articleNumberedImage } 
                    width={500} 
                    height={500} 
                    className="object-contain w-full pb-8 hidden sm:block" 
                    alt="Herbaly Marketplace" 
                    quality={90}
                    loading="lazy" /> }
                { articleNumberedSection?.articleNumberedMobileImage &&
                <Image 
                    src={ articleNumberedSection?.articleNumberedMobileImage } 
                    width={500} 
                    height={500} 
                    className="object-contain w-full pb-8 block sm:hidden" 
                    alt="Herbaly Marketplace" 
                    quality={90}
                    loading="lazy" /> }
                <div style={{ color: articleNumberedParagraphColor }} className={`text-2xl sm:text-[26px] leading-10`} dangerouslySetInnerHTML={{ __html: articleNumberedSection?.articleNumberedParagraph  || " " }}></div>
            </div>
        </div>
    )
}

export default ArticleNumberedBlock;