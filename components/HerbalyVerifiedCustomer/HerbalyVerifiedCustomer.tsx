"use client";
import Image from 'next/image'

interface HerbalyVerifiedCustomerProps {
    verifiedCustomerQuote?: any
}

function HerbalyVerifiedCustomer({ verifiedCustomerQuote }: HerbalyVerifiedCustomerProps) {
  return (
    <> 
        <div className="max-w-[85%] sm:max-w-screen-sm m-auto">
            <div className='flex items-center gap-4'>
                { verifiedCustomerQuote?.customerImage && <Image 
                    src={ verifiedCustomerQuote?.customerImage }
                    width={75}
                    height={75}
                    quality={90}
                    className="object-contain w-[75px] h-[75px]"
                    alt="Herbaly Marketplace"
                    priority
                />
                }   
                <div>
                    <p style={{ color: verifiedCustomerQuote?.quoteColor }} className='text-base font-medium'>{ verifiedCustomerQuote?.quote }</p>
                    <div className='flex gap-2 mt-1'>
                        <p style={{ color: verifiedCustomerQuote?.textColor }} className='text-xs' > { verifiedCustomerQuote?.userName } </p>
                        { verifiedCustomerQuote?.verifiedCustomer?.image && <Image 
                            src={ verifiedCustomerQuote?.verifiedCustomer?.image }
                            width={12}
                            height={12}
                            className="object-contain"
                            alt="Herbaly Marketplace"
                            priority
                        />}
                        <p style={{ color: verifiedCustomerQuote?.textColor }} className='text-xs' > { verifiedCustomerQuote?.verifiedCustomer?.text } </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default HerbalyVerifiedCustomer;
