"use client";
import Image from 'next/image'

interface HerbalyRichTextProps {
    herbalyRichText?: TrustedHTML
    sizeVariant?: string
    herbalyRichTextColor?: any
    textAlignment?: any
    headingBorderImage?: any
    articlePage?: any
}

function HerbalyRichText({ herbalyRichText, sizeVariant, herbalyRichTextColor, textAlignment, headingBorderImage, articlePage }: HerbalyRichTextProps) {
    return (
    <div className="max-w-screen-2xl mx-auto text-center px-4 py-4 xl:px-40 xl:py-12 lg:px-32 lg:py-10">
        {
            (() => {
            if (sizeVariant === "H1")
                return (
                    <>
                        { headingBorderImage && 
                            <Image src={ headingBorderImage } width={283} height={8} className="object-contain" alt="Herbaly Marketplace" loading="lazy" /> }
                            <div style={{ color: herbalyRichTextColor, textAlign: textAlignment, maxWidth: articlePage == true ? "960px": "1536px" }} className={`text-[40px] max-[600px]:text-[35px] mx-auto ${articlePage == true ? "sm:px-4": ""}`} dangerouslySetInnerHTML={{ __html: herbalyRichText || " " }}></div>
                    </>
                )
            else if (sizeVariant === "MainHeading")
                return (
                    <>
                        { headingBorderImage && 
                            <Image src={ headingBorderImage } width={283} height={8} className="object-contain" alt="Herbaly Marketplace" loading="lazy" /> }
                            <div style={{ color: herbalyRichTextColor, textAlign: textAlignment, maxWidth: articlePage == true ? "960px": "1536px" }} className={`text-[48px] max-[600px]:text-[40px] mx-auto ${articlePage == true ? "sm:px-4": ""}`} dangerouslySetInnerHTML={{ __html: herbalyRichText || " " }}></div>
                    </>
            )
            else if (sizeVariant === "H2")
                return <div style={{ color: herbalyRichTextColor, textAlign: textAlignment, maxWidth: articlePage == true ? "960px": "1536px" }} className="text-[30px] max-[600px]:text-[25px]" dangerouslySetInnerHTML={{ __html: herbalyRichText || " " }}></div>
            else if (sizeVariant === "H3")
                return <div style={{ color: herbalyRichTextColor, textAlign: textAlignment, maxWidth: articlePage == true ? "960px": "1536px" }} className="text-[28px] max-[600px]:text-[20px]" dangerouslySetInnerHTML={{ __html: herbalyRichText || " " }}></div>
            else if (sizeVariant === "H4")
                return <div style={{ color: herbalyRichTextColor, textAlign: textAlignment, maxWidth: articlePage == true ? "960px": "1536px" }} className="text-[22px] max-[600px]:text-[18px]" dangerouslySetInnerHTML={{ __html: herbalyRichText || " " }}></div>
            else
                return <div style={{ color: herbalyRichTextColor, textAlign: textAlignment, maxWidth: articlePage == true ? "960px": "1536px" }} className="text-[18px] max-[600px]:text-[16px]" dangerouslySetInnerHTML={{ __html: herbalyRichText || " " }}></div>
            })()
        }
    </div>
  );
}

export default HerbalyRichText;
