"use client";
import Image from 'next/image'

interface HerbalyAnnouncementBarProps {
    AnnouncementBar?: String ;
    Icon?: any;
    BackgroundColor?: string;
    TextColor?: string;
    herbalyLogo?: any;
    textAlignment?: any;
}

function HerbalyAnnouncementBar({ AnnouncementBar, Icon, BackgroundColor, TextColor, herbalyLogo, textAlignment }: HerbalyAnnouncementBarProps) {
  return (
    <div style={{ background:  BackgroundColor, color: TextColor }}>
      <div style={{ justifyContent: textAlignment }} className={`mx-auto w-full flex justify-center gap-2 items-center py-1.5 ${herbalyLogo != undefined ? "max-w-[960px] px-4": "max-w-screen-2xl"}`}>
        {herbalyLogo && <Image 
                      src={ herbalyLogo }
                      width={168}
                      height={25}
                      quality={90}
                      className="object-contain py-2"
                      alt="Herbaly Marketplace"/>   }
          { AnnouncementBar && <p>{ AnnouncementBar }</p> }
          { Icon && <Image
              src={ Icon }
              width={20}
              height={20}
              quality={100}
              className="object-contain"
              alt="Herbaly Marketplace"
              />  
          }
      </div>
    </div>
  );
}

export default HerbalyAnnouncementBar;
