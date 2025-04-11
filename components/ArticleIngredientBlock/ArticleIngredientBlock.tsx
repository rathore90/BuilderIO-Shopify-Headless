"use client";
import Image from 'next/image'

interface ArticleIngredientBlockProps {
    articleIngredientCardBackground?: any
    articleIngredientHeadingColor?: any
    articleIngredientParagraphColor?: any
    articleIngredientList?: any
}

function ArticleIngredientBlock( { articleIngredientCardBackground, articleIngredientHeadingColor, articleIngredientParagraphColor, articleIngredientList } : ArticleIngredientBlockProps) {
    return (   
        <div className='max-w-[960px] m-auto'>
            {articleIngredientList?.map((item: any, index: any) => (
                <div style={{ background: articleIngredientCardBackground }} key={index} className='my-[100px] py-12 px-6 sm:px-16 flex flex-col items-center rounded-xl'>
                    { item?.articleIngredientImage && 
                        <Image 
                            src={ item?.articleIngredientImage }
                            width={219}
                            height={189}
                            className="object-contain w-[219px] h-[189px] -mt-[150px]"
                            alt="Herbaly Marketplace"
                            quality={90}
                        />  
                    }
                    <h2 className="text-[45px] font-bold pb-4" style={{ color: articleIngredientHeadingColor }} >{ item?.articleIngredientHeading }</h2>
                    <div style={{ color: articleIngredientParagraphColor }} className='text-2xl leading-10' dangerouslySetInnerHTML={{ __html: item?.articleIngredientParagraph || " " }}></div>
                </div>
            ))}
        </div>
     )
}

export default ArticleIngredientBlock;