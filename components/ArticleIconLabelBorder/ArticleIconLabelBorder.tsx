"use client";
import Image from 'next/image'

interface ArticleIconLabelBorderProps {
    IconLabelBorderBackgroundColor?: string;
    IconLabelBorderTextColor?: string;
    articlePage?: boolean;
    IconLabelBorder?: any;
}

function ArticleIconLabelBorder( { IconLabelBorderBackgroundColor, IconLabelBorderTextColor, articlePage, IconLabelBorder }: ArticleIconLabelBorderProps) {
    return (    
        <div style={{ background: IconLabelBorderBackgroundColor  }} className={`${articlePage == true ? "max-w-[960px]" : "max-w-screen-2xl"} m-auto w-[100%] flex items-center justify-between gap-2 sm:gap-4`}>
            <div className='flex items-center gap-2 sm:gap-4 w-[70%] sm:w-[30%]'>
                { IconLabelBorder?.iconLabelBorderIcon &&
                    <Image 
                        src={ IconLabelBorder?.iconLabelBorderIcon } 
                        width={38} 
                        height={38} 
                        className="object-contain w-[38px] h-[38px]" 
                        alt="Herbaly Marketplace" 
                        loading="lazy"
                        quality={90} /> 
                }
                <p className="text-base sm:text-lg" style={{ color: IconLabelBorderTextColor }}>{ IconLabelBorder?.iconLabelBorderText }</p>
            </div>
            <div className='w-[30%] sm:w-[80%]'>
                <Image 
                    src={ IconLabelBorder?.iconLabelBorderFile } 
                    width={10} 
                    height={10} 
                    className="object-cover w-full h-[5px]" 
                    alt="Herbaly Marketplace" 
                    loading="lazy"
                    quality={90} /> 
            </div>

        </div>
    )
}

export default ArticleIconLabelBorder;