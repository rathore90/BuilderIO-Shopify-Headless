"use client";
import Image from 'next/image'

interface HerbalyFAQProps {
    FAQ?: any;
    faqSectionLogos?: any
    faqSectionheading?: any
    faqSectionSubHeading?: any
    faqSectionPrimaryTextColor?: any
    faqSectionSecondaryTextColor?: any

}

function HerbalyFAQ({ FAQ, faqSectionLogos, faqSectionheading, faqSectionSubHeading, faqSectionPrimaryTextColor, faqSectionSecondaryTextColor }: HerbalyFAQProps) {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 max-w-screen-2xl m-auto p-10">
        <div className='flex flex-col justify-center lg:w-[50%]'>
          <Image
              src={ faqSectionLogos }
              width={162}
              height={25}
              quality={80}
              className="object-contain"
              alt="Herbaly Marketplace"
              loading="lazy"
          /> 
          <div style={{ color: faqSectionPrimaryTextColor }} className="max-[600px]:text-[24px] text-[40px] leading-[47px] max-[600px]:leading-[28px] py-6 max-w-xl" dangerouslySetInnerHTML={{ __html: faqSectionheading || " " }}></div>
          <p className="text-xl" style={{ color: faqSectionSecondaryTextColor }}>{ faqSectionSubHeading }</p>
        </div>
        <div className='lg:w-[50%]'>
          {FAQ.map((data: any, index: any) => (
            <div key={index}>
                <div className="faq-content">
                  <div className="faq-question">
                    <input id={"q" + index} type="checkbox" className="panel" />
                    <label htmlFor={"q" + index} className="panel-title flex justify-between text-lg relative font-medium">
                      {data?.Question}<div className=""><div className="plus relative">+</div></div></label>
                    <div style={{ color: faqSectionSecondaryTextColor }} className="panel-content text-base w-[80%]">{data?.Answer}</div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HerbalyFAQ;
