import Image from 'next/image'

interface HerbalyIngredientBlockProps {
    ingredientSection?: any
    ingredientSectionBackground?: any
    ingredientHeadingColor?: any
    ingredientParagraphColor?: any
}

function HerbalyIngredientBlock( { ingredientSection, ingredientSectionBackground, ingredientHeadingColor, ingredientParagraphColor }: HerbalyIngredientBlockProps) {
    return (
        <section>
            <div style={{ background: ingredientSectionBackground }} className='max-w-screen-2xl m-auto px-6 sm:px-12 py-12'>
                <div style={{ color: ingredientHeadingColor }} className="text-[35px] md:text-[40px] md:leading-[52px] text-center sm:mb-8 sm:px-12 xl:px-72" dangerouslySetInnerHTML={{ __html: ingredientSection?.ingredientSectionHeading || "" }}></div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 text-center'>
                    {ingredientSection?.ingredientList?.map((data: any, index: any) => (
                        <div key={index} className='px-6 py-4'>
                            <Image 
                                src={ data?.ingredientImage }
                                width={216}
                                height={210}
                                quality={100}
                                className='object-contain m-auto'
                                alt='Herbaly'
                            />
                            <div style={{ color: '#fff', background: ingredientHeadingColor }} className='rounded-full h-[20px] w-[10px] p-[16px] flex justify-center items-center mx-auto mb-[6px]'>{ data?.ingredientNumber }</div>
                            <h2 style={{ color: ingredientHeadingColor }} className='font-bold text-[22px] mb-[6px]'>{ data?.ingredientTitle }</h2>
                            <p style={{ color: ingredientParagraphColor }} className='sm:w-[340px] sm:mx-auto'> { data?.ingredientDescription } </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HerbalyIngredientBlock;