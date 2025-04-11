"use client";
import Image from 'next/image'
import { builder } from '@builder.io/react';
import { useState, useEffect } from 'react';

interface PriceCardProps {
    priceCards?: any
    EmptyRadio?: any
    SelectedRadio?: any
    cardBackground?: any
    primaryTextColor?: any
    secondaryTextColor?: any
    subscribeAndSaveBackgroundColor?: any
    subscribeAndSaveTextColor?: any
    productDetails?: any
    priceColor?: any
}

function PriceCard({ priceCards, 
                     EmptyRadio, 
                     SelectedRadio, 
                     cardBackground, 
                     primaryTextColor, 
                     secondaryTextColor, 
                     subscribeAndSaveTextColor, 
                     subscribeAndSaveBackgroundColor,
                     priceColor,
                     productDetails }: PriceCardProps) {

    const [InternalSource, setInternalSource] = useState(String);
    const [CampaignName, setCampaign] = useState(Object);
    const [error, setError] = useState(false);
    const [state, setState] = useState('');

    useEffect(() => {
        setState('loading');

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const getCampaignName = urlParams.get('Campaign');

        const builderContent = builder.getContent('page').promise();
        builderContent.then((res) => {
                let PageVariantName = res[0].testVariationName?.substring(0, res[0].testVariationName?.indexOf( ' ')); 
                let PageVariantId = res[0].testVariationId?.substr(res[0].testVariationId?.length - 4).toUpperCase();
                let HerbalySKuPageType = (res[0]?.data?.herbalyPageVersion).split("-");
                let HerbalySku = HerbalySKuPageType[0];
                let HerbalyPageType = HerbalySKuPageType[1];
                let InternalSource = ``;

                if(PageVariantId != undefined) {
                    InternalSource = `${PageVariantId}-${HerbalySku}-${PageVariantName}-${HerbalyPageType}`;
                } else {
                    InternalSource = `NoAB-${HerbalySku}-${res[0]?.name?.substring(0, res[0]?.name?.indexOf(' '))}-${HerbalyPageType}`;
                }

                setInternalSource(InternalSource);
                setCampaign(getCampaignName);
                setState('success');
            })
            .catch((err) => {
                console.error('Error:', err);
                setState('error');
                setError(err);
            });
    }, []);

    const oneTimePurchase = (e: Event, link: any, price?: any, quantity?: any) => {
        let target = (e.target as HTMLElement); 

        let selectedRadioContainer = target.getElementsByTagName('img')[0] as HTMLElement;
        selectedRadioContainer.setAttribute('src', SelectedRadio);
        selectedRadioContainer.setAttribute('srcset', '');

        let emptyRadioContainer =  target?.nextSibling as HTMLElement;
        let emptyRadio = emptyRadioContainer?.getElementsByTagName('img')[0] as HTMLElement;
        emptyRadio.setAttribute('src', EmptyRadio);
        emptyRadio.setAttribute('srcset', '');

        let parentContainer = target.closest('.slideContainer')
        let slide_button = parentContainer?.querySelectorAll('a.slideButton')[0] as any;

        console.log("OPTCampaign==> ", CampaignName);

        if(link?.includes('discount')) {
            if (CampaignName != null) {
                slide_button.href = link + `%26attributes[Source]=${InternalSource}-OTP-${quantity}%26attributes[Checkout]=Builder%26attributes[Campaign]=${CampaignName}`;   
            } else  {
                slide_button.href = link + `%26attributes[Source]=${InternalSource}-OTP-${quantity}%26attributes[Checkout]=Builder`;   
            }
        } else {
            if (CampaignName != null) {
                slide_button.href = link + `/?attributes[Source]=${InternalSource}-OTP-${quantity}%26attributes[Checkout]=Builder%26attributes[Campaign]=${CampaignName}`;
            } else {
                slide_button.href = link + `/?attributes[Source]=${InternalSource}-OTP-${quantity}%26attributes[Checkout]=Builder`;
            }   
        }

        slide_button.dataset.productQuantity = quantity;
        slide_button.dataset.productPrice = price;
    };

    const subscriptionPurchase = (e: Event, link: any, price?: any, quantity?: any) => {
        let target = (e.target as HTMLElement);

        let selectedRadioContainer = target.getElementsByTagName('img')[0] as HTMLElement;
        selectedRadioContainer.setAttribute('src', SelectedRadio);
        selectedRadioContainer.setAttribute('srcset', '');

        let emptyRadioContainer =  target?.parentNode?.previousSibling as HTMLElement;
        let emptyRadio = emptyRadioContainer?.getElementsByTagName('img')[0] as HTMLElement;
        emptyRadio.setAttribute('src', EmptyRadio);
        emptyRadio.setAttribute('srcset', '');

        let parentContainer = target.closest('.slideContainer')
        let slide_button = parentContainer?.querySelectorAll('a.slideButton')[0] as any;

        console.log("SUBCampaign==> ", CampaignName);

        if(link?.includes('discount')) {
            if (CampaignName != null) {
                slide_button.href = link + `%26attributes[Source]=${InternalSource}-SUB-${quantity}%26attributes[Checkout]=Builder%26attributes[Campaign]=${CampaignName}`;   
            } else {
                slide_button.href = link + `%26attributes[Source]=${InternalSource}-SUB-${quantity}%26attributes[Checkout]=Builder`;   
            }
        } else {
            if (CampaignName != null) {
                slide_button.href = link + `/?attributes[Source]=${InternalSource}-SUB-${quantity}%26attributes[Checkout]=Builder%26attributes[Campaign]=${CampaignName}`;  
            } else {
                slide_button.href = link + `/?attributes[Source]=${InternalSource}-SUB-${quantity}%26attributes[Checkout]=Builder`;  
            } 
        } 

        slide_button.dataset.productQuantity = quantity;
        slide_button.dataset.productPrice = price;
    };

    return (
        <>
            {state === 'loading' ? (
                <></>
            ) : (
                <div className="flex gap-4 max-[1024px]:gap-8 max-[1024px]:flex-col-reverse w-[100%] xl:w-[1280px] max-[1024px]:max-w-[500px] max-w-screen-2xl m-auto ">
                    {priceCards.map((data: any, index: any) => (  
                        <div style={{ background: cardBackground }} className="relative border-2 max-[600px]:max-w-[425px] m-auto rounded-lg slideContainer w-[100%] min-[1025px]:w-[33.33%]" key={index}>
                            <p className="absolute top-[-18px] py-1 px-5 left-2/4 translate-x-[-50%] rounded-full font-bold text-base leading-[26px] w-max" style={{ background: data?.LabelBackgroundColor, color: data?.LabelTextColor }}>{data?.SlideLabel}</p>
                            <div style={{ background: data?.cardHeaderBackground != undefined? data?.cardHeaderBackground : '#fff' }} className="text-center p-6 mb-6 rounded-t-lg">
                                <div style={{ color: primaryTextColor }} className="customRichText font-bold" dangerouslySetInnerHTML={{ __html: data?.priceCardHeading || "" }}></div>
                                <div style={{ color: data?.extraCopyTextColor}} className="extraCopy" dangerouslySetInnerHTML={{ __html: data?.extraCopy || "" }}></div>
                                { data?.ServingDetails?.text && <div className="flex justify-center items-center gap-1 mt-2">
                                    { data?.ServingDetails?.serving_icon && <Image
                                        src={ data?.ServingDetails?.serving_icon }
                                        width={18}
                                        height={17}
                                        quality={90}
                                        className="object-contain"
                                        alt="Herbaly Marketplace"
                                        loading="lazy"
                                    /> }
                                    <p style={{ color: secondaryTextColor }} className='text-sm font-normal h-4'>{ data?.ServingDetails?.text }</p>
                                </div> }    
                            </div>
                            <Image
                                src={ data.image }
                                width={400}
                                height={400}
                                quality={100}
                                className="w-[95%] h-56 mx-auto mb-5 object-contain"
                                alt="Herbaly Marketplace"
                                loading="lazy"
                            />
                            <div className="radioContainer">
                                { data?.OneTimeOption?.Title && <div style={{ background: 'white' }} 
                                    data-product-quantity={ data?.productQuantity } 
                                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => oneTimePurchase(e as unknown as Event, data?.OneTimeOption?.Link as String, data?.OneTimeOption?.Price as String, data?.productQuantity as String)}
                                    className="flex flex-wrap max-w-96 justify-between items-center p-2 my-3 mx-1 cursor-pointer oneTimeRadio">
                                    <div className="flex items-center gap-x-1 pointer-events-none">
                                        <div className="w-6 h-6 border-2 rounded-full">
                                            <Image
                                                src={EmptyRadio}
                                                width={25}
                                                height={25}
                                                quality={90}
                                                className='object-contain'
                                                alt="Herbaly Marketplace Inc"
                                                loading="lazy"
                                                style={{ pointerEvents: 'none'}}
                                            />
                                        </div>
                                        <p style={{ color: secondaryTextColor }} className="text-md">{ data?.OneTimeOption?.Title } { data?.OneTimeOption?.OptionalTitle && <span style={{ background: subscribeAndSaveBackgroundColor, color: subscribeAndSaveTextColor, borderColor: subscribeAndSaveBackgroundColor }} className="py-1 px-2 border-2">{ data?.OneTimeOption?.OptionalTitle }</span> } </p>
                                    </div>
                                    <div className="flex items-center gap-x-2 pointer-events-none">
                                        <p style={{ color: priceColor == undefined ? '#706861' : priceColor }} className="text-2xl font-bold">{data?.OneTimeOption?.Price}</p>
                                        <div className="text-left text-sm">
                                            <p style={{ color: secondaryTextColor}}>{data?.OneTimeOption?.ShippingAmount}</p> 
                                            <p style={{ color: secondaryTextColor}}>{data?.OneTimeOption?.ShippingLabel}</p>
                                        </div>
                                    </div>
                                </div> }
                                <div className='max-w-96 my-3 mx-1'>
                                    <div className='py-[.2rem] text-center' style={{ background: data?.SusbcriptionOptions?.subscriptionLabelBackgroundColor, color: data?.SusbcriptionOptions?.subscriptionLabelTextColor }}>{ data?.SusbcriptionOptions?.subscriptionLabel }</div>
                                    <div style={{ background: 'white' }} 
                                        data-product-quantity={ data?.productQuantity }
                                        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => subscriptionPurchase(e as unknown as Event, data?.SusbcriptionOptions?.Link as String, data?.SusbcriptionOptions?.Price as String, data?.productQuantity as String)} 
                                        className="flex flex-wrap max-w-96 justify-between items-center p-2 cursor-pointer subscriptionRadio">
                                        <div className="flex items-center gap-x-1 pr-3 pointer-events-none">
                                            <div className="w-6 h-6 border-2 rounded-full">
                                                <Image
                                                    src={SelectedRadio}
                                                    width={25}
                                                    height={25}
                                                    quality={90}
                                                    className='object-contain'
                                                    alt="Herbaly Marketplace Inc"
                                                    loading="lazy"
                                                    style={{ pointerEvents: 'none'}}
                                                />
                                            </div>
                                            <p style={{ color: secondaryTextColor }} className="text-md">{data?.SusbcriptionOptions?.Title} <span style={{ background: subscribeAndSaveBackgroundColor, color: subscribeAndSaveTextColor, borderColor: subscribeAndSaveBackgroundColor }} className="py-1 px-2 border-2">{data?.SusbcriptionOptions?.OptionalTitle}</span></p>
                                        </div>
                                        <div className="flex items-center gap-x-2 pointer-events-none">
                                            <p style={{ color: priceColor == undefined ? '#706861' : priceColor }} className="text-2xl font-bold">{data?.SusbcriptionOptions?.Price}</p> 
                                            <div className="text-left text-sm">
                                                <p style={{ color: secondaryTextColor}}>{data?.SusbcriptionOptions?.ShippingAmount}</p> 
                                                <p style={{ color: secondaryTextColor}}>{data?.SusbcriptionOptions?.ShippingLabel}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    

                            { CampaignName != null ? 
                                <a target="_blank" id={`add_to_cart_${index+1}`} data-campaign-name={CampaignName} data-product-title={ productDetails?.productTitle } data-product-id={ productDetails?.productID } data-variant-id={ productDetails?.productVariantID } data-product-price={ data?.SusbcriptionOptions?.Price } data-product-quantity={ data?.productQuantity } className="slideButton" 
                                    href={ data?.SlideButton?.SlideDefaultLink?.includes('discount') ? data?.SlideButton?.SlideDefaultLink + `%26attributes[Source]=${InternalSource}-SUB-${data?.productQuantity}%26attributes[Checkout]=Builder%26attributes[Campaign]=${CampaignName}` : data?.SlideButton?.SlideDefaultLink + `/?attributes[Source]=${InternalSource}-SUB-${data?.productQuantity}%26attributes[Checkout]=Builder%26attributes[Campaign]=${CampaignName}`}>
                                    <div style={{ background: data?.SlideButton?.SlideButtonBackground, color: data?.SlideButton?.SlideButtonTextColor }} className="bg-gradient-to-r from-[#797979] to-[#BEBEBE] flex justify-center items-center gap-2 w-10/12 m-auto p-4 rounded-[50px] my-3 text-white text-xl font-bold">
                                        {data?.SlideButton?.SlideButtonText}
                                        { data?.SlideButton?.SlideButtonImage && <img
                                            src={ data?.SlideButton?.SlideButtonImage }
                                            width={25}
                                            height={25}
                                            className='object-contain'
                                            alt="Herbaly Marketplace Inc"
                                            loading="lazy"
                                        />}
                                    </div>
                                </a> : 
                                <a target="_blank" id={`add_to_cart_${index+1}`} data-product-title={ productDetails?.productTitle } data-product-id={ productDetails?.productID } data-variant-id={ productDetails?.productVariantID } data-product-price={ data?.SusbcriptionOptions?.Price } data-product-quantity={ data?.productQuantity } className="slideButton" 
                                    href={ data?.SlideButton?.SlideDefaultLink?.includes('discount') ? data?.SlideButton?.SlideDefaultLink + `%26attributes[Source]=${InternalSource}-SUB-${data?.productQuantity}%26attributes[Checkout]=Builder` : data?.SlideButton?.SlideDefaultLink + `/?attributes[Source]=${InternalSource}-SUB-${data?.productQuantity}%26attributes[Checkout]=Builder`}>
                                    <div style={{ background: data?.SlideButton?.SlideButtonBackground, color: data?.SlideButton?.SlideButtonTextColor }} className="bg-gradient-to-r from-[#797979] to-[#BEBEBE] flex justify-center items-center gap-2 w-10/12 m-auto p-4 rounded-[50px] my-3 text-white text-xl font-bold">
                                        {data?.SlideButton?.SlideButtonText}
                                        { data?.SlideButton?.SlideButtonImage && <img
                                            src={ data?.SlideButton?.SlideButtonImage }
                                            width={25}
                                            height={25}
                                            className='object-contain'
                                            alt="Herbaly Marketplace Inc"
                                            loading="lazy"
                                        />}
                                    </div>
                                </a>
                            } 
                                              
                            {/* <a target="_blank" id={`add_to_cart_${index+1}`} data-product-title={ productDetails.productTitle } data-product-id={ productDetails.productID } data-variant-id={ productDetails.productVariantID } data-product-price={ data?.SusbcriptionOptions?.Price } data-product-quantity={ data?.productQuantity } className="slideButton" 
                                href={ data?.SlideButton?.SlideDefaultLink?.includes('discount') ? data?.SlideButton?.SlideDefaultLink + `%26attributes[Source]=${InternalSource}-SUB-${data?.productQuantity}%26attributes[Checkout]=Builder` : data?.SlideButton?.SlideDefaultLink + `/?attributes[Source]=${InternalSource}-SUB-${data?.productQuantity}%26attributes[Checkout]=Builder`}>    
                                <div style={{ background: data?.SlideButton?.SlideButtonBackground, color: data?.SlideButton?.SlideButtonTextColor }} className="bg-gradient-to-r from-[#797979] to-[#BEBEBE] flex justify-center items-center gap-2 w-10/12 m-auto p-4 rounded-[50px] mb-3 text-white text-xl font-bold">
                                    {data?.SlideButton?.SlideButtonText}
                                    <Image
                                        src={data?.SlideButton?.SlideButtonImage}
                                        width={25}
                                        height={25}
                                        quality={90}
                                        className='object-contain'
                                        alt="Herbaly Marketplace Inc"
                                        loading="lazy"
                                    />
                                </div>
                            </a> */}

                            <div>
                                <p style={{ color: data?.StockLabel?.labelColor }} className='text-center font-medium text-base	leading-7 mb-3'>{data?.StockLabel?.text}</p>
                            </div>
                            <div className='flex justify-center items-center gap-4 mb-6'>
                                <Image
                                    src={data?.GuaranteeContainer?.image}
                                    width={25}
                                    height={25}
                                    quality={90}
                                    className='object-contain'
                                    alt="Herbaly Marketplace Inc"
                                    loading="lazy"
                                />
                                <p style={{ color: secondaryTextColor }} className='text-[16px] font-normal leading-5 not-italic'>{data?.GuaranteeContainer?.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
      );
}

export default PriceCard;
