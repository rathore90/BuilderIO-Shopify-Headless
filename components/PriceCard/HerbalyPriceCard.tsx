"use client";
import Image from 'next/image'
import { builder } from '@builder.io/react';
import { useState, useEffect } from 'react';

interface HerbalyPriceCardProps {
    priceCards?: any
    productDetails?: any
    mobileCondensedDesign?: any
}

function HerbalyPriceCard({ priceCards, 
                            productDetails,
                            mobileCondensedDesign }: HerbalyPriceCardProps) {

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
                let PageVariantName = res[0].testVariationName?.substring(0, res[0].testVariationName?.indexOf(' ')); 
                let PageVariantId = res[0].testVariationId?.substr(res[0].testVariationId?.length - 4).toUpperCase();
                let HerbalySKuPageType = (res[0]?.data?.herbalyPageVersion).split("-");
                let HerbalySku = HerbalySKuPageType[0];
                let HerbalyPageType = HerbalySKuPageType[1];
                let InternalSource = '';
                
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
            console.log("CampaignName ", CampaignName);
    }, []);

    const animateValue = (obj: any, start: any, end: any, duration: any, format: any, decimal: boolean = false, decimalformatting: boolean = false) => {
        let startTimestamp: any;
        const step = (timestamp: any) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          if(format) {
            if(decimal) {
                if((progress * (end - start) + start) == 0) {
                    obj.innerHTML = ".00"
                } else {
                    obj.innerHTML = "." + (progress * (end - start) + start).toFixed();
                }
            } else if(decimalformatting) {
                obj.innerHTML = (progress * (end - start) + start).toFixed(2);
            } else {
                obj.innerHTML = (progress * (end - start) + start).toFixed();
            }
          } else {
            obj.innerHTML = (progress * (end - start) + start);
          }
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
    }

    const isEmpty = (value: any) => {
        return (value == null || (typeof value === "string" && value.trim().length === 0));
    }
      
    const oneTimePurchase = (e: Event, 
                            link: any, 
                            price?: any, 
                            quantity?: any, 
                            OTPAmount?: any, 
                            SUBAmount?: any,
                            OTPTitleNode?: any,
                            SUBTitleNode?: any,
                            SUBSPrice?: string,
                            OTPPrice?: string, 
                            SUBSInstantSavings?: number,
                            OTPInstantSavings?: number,
                            otpImage?: any,
                            mobileCondensedDesign?: any,
                            priceCardHeading?: any,
                            priceCardHeadingOTP?: any  ) => {
        let target = (e.target as HTMLElement); 

        if(!isEmpty(priceCardHeadingOTP)) {
            let label__ups = target?.parentElement?.parentElement?.getElementsByClassName('label-up');
            [].forEach.call(label__ups, function(el: any) {
                el.style.top = "-100%";
            });
        }

        let tempElementSUB = document.createElement("div");
        tempElementSUB.innerHTML = SUBTitleNode;
        let findSpanSUB = tempElementSUB?.getElementsByTagName("span")[0] as HTMLElement;
        let exampleAttrSUB = findSpanSUB.getAttribute("style") as any;
        let activeLabelOTP = target?.getElementsByTagName("span")[0] as HTMLElement;
        activeLabelOTP.setAttribute("style", exampleAttrSUB);

        let tempElementOTP = document.createElement("div");
        tempElementOTP.innerHTML = OTPTitleNode;
        let findSpanOTP = tempElementOTP?.getElementsByTagName("span")[0] as HTMLElement;
        let exampleAttrOTP = findSpanOTP.getAttribute("style") as any;
        let activeLabelSUB = target.nextElementSibling?.getElementsByTagName("span")[0] as HTMLElement;
        activeLabelSUB.setAttribute("style", exampleAttrOTP);

        let parentContainer = target.closest('.slideContainer')
        let slide_button = parentContainer?.querySelectorAll('a.slideButton')[0] as any;

        let price_optional_label = target.parentElement?.parentElement?.getElementsByClassName('price_optional_label')[0] as HTMLElement;
        if (price_optional_label && quantity == 1) {
            price_optional_label.style.display = 'none';
        }

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

        let findParent = target.closest(".slideContainer");
        let dynamicPricingOTP = findParent?.getElementsByClassName("dynamic_pricing")[0] as HTMLElement;
        dynamicPricingOTP.innerHTML = OTPAmount;

        let convertOTPTOINT = parseFloat(OTPAmount?.replace('$', ''));
        let convertSUBTOINT = parseFloat(SUBAmount?.replace('$', ''));

        // Total Amount
        animateValue(dynamicPricingOTP, convertSUBTOINT, convertOTPTOINT, 500, true, false, true);

        // Dynamic Price 
        let pricingNodeSubs = target.parentElement?.parentElement?.getElementsByClassName("dynamic_price")[0];
        let pricingNodeSubsSuperscript = target.parentElement?.parentElement?.getElementsByClassName("superscript")[0];

        let convertSUBSBasePrice = SUBSPrice?.substring(0, SUBSPrice.indexOf('.'));
        let convertOTPBasePrice = OTPPrice?.substring(0, OTPPrice.indexOf('.'));

        let convertSUBSPriceSuperscript = SUBSPrice?.substring(SUBSPrice.indexOf('.') + 1);
        let convertOTPPriceSuperscript = OTPPrice?.substring(OTPPrice.indexOf('.') + 1);
        
        let convertSUBSPrice = parseFloat(convertSUBSBasePrice || '');
        let convertOTPPrice = parseFloat(convertOTPBasePrice || '');

        let convertSUBSPriceSup = parseInt(convertSUBSPriceSuperscript || '');
        let convertOTPPriceSup = parseInt(convertOTPPriceSuperscript || '');

        if(pricingNodeSubs != undefined) {
            animateValue(pricingNodeSubs, convertSUBSPrice, convertOTPPrice, 500, true);
        }

        if(pricingNodeSubsSuperscript != undefined) {
            animateValue(pricingNodeSubsSuperscript, convertSUBSPriceSup, convertOTPPriceSup, 500, true, true);
        }

        // Instant Savings
        let instantSavingNode = target.parentElement?.parentElement?.getElementsByClassName("instantSaving")[0];
        if(instantSavingNode != undefined) {
            animateValue(instantSavingNode, SUBSInstantSavings, OTPInstantSavings, 500, true, false, true);
        }

        // Radio buttons
        if (mobileCondensedDesign ) {
            let subscriptionRadio = target?.parentElement?.querySelectorAll('.subscriptionRadio')[0] as HTMLElement;
            subscriptionRadio.getElementsByClassName('checkbox')[0].classList.remove('selected');

            let checkbox = target?.getElementsByClassName('checkbox')[0] as HTMLElement;
            checkbox.classList.add('selected');
        } else {
            let subscriptionRadio = target.closest('.slideContainer')?.querySelectorAll('.subscriptionRadio')[0] as HTMLElement;    
            subscriptionRadio.getElementsByClassName('checkbox')[0].classList.remove('selected');
    
            let checkbox = target?.getElementsByClassName('checkbox')[0] as HTMLElement;
            checkbox.classList.add('selected');
        }

        // Flipping the card
        if(otpImage != undefined) {
            if (mobileCondensedDesign && window.matchMedia("(max-width: 1024px)").matches) {
                let flipCard = target.parentElement?.parentElement?.parentElement?.getElementsByClassName('flip')[0] as HTMLElement;
                if(flipCard) {
                    flipCard.classList.add('flipped');
                }
            } else {
                let flipCard = target.parentElement?.parentElement?.parentElement?.getElementsByClassName('flip')[0] as HTMLElement;
                if(flipCard) {
                    flipCard.classList.add('flipped');
                }
            }
        }
    };

    const subscriptionPurchase = (e: Event, 
                                  link: any, 
                                  price?: any, 
                                  quantity?: any, 
                                  SUBAmount?: any, 
                                  OTPAmount?: any,
                                  SUBTitleNode?: any,
                                  OTPTitleNode?: any,
                                  SUBSPrice?: string,
                                  OTPPrice?: string, 
                                  SUBSInstantSavings?: number,
                                  OTPInstantSavings?: number,
                                  otpImage?: any,
                                  mobileCondensedDesign?: any,
                                  priceCardHeading?: any,
                                  priceCardHeadingOTP?: any ) => {
        let target = (e.target as HTMLElement);

        if(!isEmpty(priceCardHeadingOTP)) {
            let label__ups = target?.parentElement?.parentElement?.parentElement?.getElementsByClassName('label-up');
            [].forEach.call(label__ups, function(el: any) {
                el.style.top = "5%";
            });
        }

        let tempElementOTP = document.createElement("div");
        tempElementOTP.innerHTML = OTPTitleNode;
        let findSpanNonActive = tempElementOTP?.getElementsByTagName("span")[0] as HTMLElement;
        if (findSpanNonActive) {    
            let exampleAttrNonActive = findSpanNonActive.getAttribute("style") as any;
            let findSpanOTP = target.parentElement?.previousElementSibling?.getElementsByTagName("span")[0] as HTMLElement;
            let exampleAttrOTP = findSpanOTP.getAttribute("style") as any;
            let activeLabelSUB = target?.getElementsByTagName("span")[0] as HTMLElement;
            activeLabelSUB.setAttribute("style", exampleAttrOTP);
            findSpanOTP.setAttribute("style", exampleAttrNonActive);
        }

        let parentContainer = target.closest('.slideContainer')
        let slide_button = parentContainer?.querySelectorAll('a.slideButton')[0] as any;

        let price_optional_label = target.parentElement?.parentElement?.parentElement?.getElementsByClassName('price_optional_label')[0] as HTMLElement;
        if (price_optional_label && quantity == 1) {
            price_optional_label.style.display = 'block';
        }

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

        let findParent = target.closest(".slideContainer");
        let dynamicPricingSUB = findParent?.getElementsByClassName("dynamic_pricing")[0] as HTMLElement;
        dynamicPricingSUB.innerHTML = SUBAmount;

        let convertOTPTOINT = parseFloat(OTPAmount?.replace('$', ''));
        let convertSUBTOINT = parseFloat(SUBAmount?.replace('$', ''));
        
        // Total Amount
        animateValue(dynamicPricingSUB, convertOTPTOINT, convertSUBTOINT, 500, true, false, true);

        // Dynamic Price 
        let pricingNodeSubs = target.parentElement?.parentElement?.previousElementSibling?.getElementsByClassName("dynamic_price")[0];
        let pricingNodeSubsSuperscript = target.parentElement?.parentElement?.previousElementSibling?.getElementsByClassName("superscript")[0];

        let convertSUBSBasePrice = SUBSPrice?.substring(0, SUBSPrice.indexOf('.'));
        let convertOTPBasePrice = OTPPrice?.substring(0, OTPPrice.indexOf('.'));

        let convertSUBSPriceSuperscript = SUBSPrice?.substring(SUBSPrice.indexOf('.') + 1);
        let convertOTPPriceSuperscript = OTPPrice?.substring(OTPPrice.indexOf('.') + 1);
        
        let convertSUBSPrice = parseFloat(convertSUBSBasePrice || '');
        let convertOTPPrice = parseFloat(convertOTPBasePrice || '');

        let convertSUBSPriceSup = parseFloat(convertSUBSPriceSuperscript || '');
        let convertOTPPriceSup = parseFloat(convertOTPPriceSuperscript || '');

        if(pricingNodeSubs != undefined) {
            animateValue(pricingNodeSubs, convertOTPPrice, convertSUBSPrice, 500, true);
        }

        if(pricingNodeSubsSuperscript != undefined) {
            animateValue(pricingNodeSubsSuperscript, convertOTPPriceSup, convertSUBSPriceSup, 500, true, true);
        }

        // Instant Savings
        let instantSavingNode = target.parentElement?.parentElement?.parentElement?.getElementsByClassName("instantSaving")[0];
        if(instantSavingNode != undefined) {
            animateValue(instantSavingNode, OTPInstantSavings, SUBSInstantSavings, 500, true, false, true);
        }

        // Radio buttons
        if (mobileCondensedDesign ) {
            let oneTimeRadio = target?.parentElement?.parentElement?.querySelectorAll('.oneTimeRadio')[0] as HTMLElement;  
            if (oneTimeRadio) {
                oneTimeRadio.getElementsByClassName('checkbox')[0].classList.remove('selected');

                let checkbox = target?.getElementsByClassName('checkbox')[0] as HTMLElement;
                checkbox.classList.add('selected');
            }
        } else {
            let oneTimeRadio = target.closest('.slideContainer')?.querySelectorAll('.oneTimeRadio')[0] as HTMLElement;  
            if (oneTimeRadio) {
                oneTimeRadio.getElementsByClassName('checkbox')[0].classList.remove('selected');

                let checkbox = target?.getElementsByClassName('checkbox')[0] as HTMLElement;
                checkbox.classList.add('selected');
            }
        }

        // Flipping the card
        if(otpImage != undefined) {
            if(mobileCondensedDesign && window.matchMedia("(max-width: 1024px)").matches) {
                let flipCard = target.parentElement?.parentElement?.parentElement?.parentElement?.getElementsByClassName('flip')[0] as HTMLElement;
                if(flipCard) {
                    flipCard.classList.remove('flipped');
                }
            } else {
                let flipCard = target.parentElement?.parentElement?.parentElement?.parentElement?.getElementsByClassName('flip')[0] as HTMLElement;
                if(flipCard) {
                    flipCard.classList.remove('flipped');
                }   
            }
        }
    };

    return (
        <>
            {state === 'loading' ? (
                <></>
            ) : (
                <>
                    <div className={`flex gap-4 max-[1024px]:gap-8 max-[1024px]:flex-col-reverse w-[100%] xl:w-[1280px] max-[1024px]:max-w-[500px] max-w-screen-2xl m-auto herbaly_price_card`}>
                        { priceCards.map((data: any, index: any) => (  
                            <>
                                <div style={{ background: data?.cardBackground, border: data?.cardBorderColor? data?.cardBorderColor:  '2px solid #363636'}} className={` ${ mobileCondensedDesign? 'hidden' : 'block' } relative border-2 max-[640px]:max-w-[425px] m-auto mb-0 rounded-lg slideContainer w-[95%] min-[1025px]:w-[33.33%]`} key={index * Math.random()}>
                                    { data?.cardLabelBackground && <div style={{ background: data?.cardLabelBackground != undefined? data?.cardLabelBackground : '#fff' }} className="text-center p-2 rounded-t-lg">
                                        { data?.priceCardLabel && <div className="customRichText font-bold" dangerouslySetInnerHTML={{ __html: data?.priceCardLabel || "" }}></div> }
                                    </div> }
                                    
                                    <div>                     
                                        <div className="heading__container mt-8 pb-2 max-[1024px]:hidden">
                                            <span className="label-up">{ data?.priceCardHeading && <div className="leading-8 herbaly__priceCardHeading" dangerouslySetInnerHTML={{ __html: data?.priceCardHeading || "" }}></div> }</span>
                                            <span className="label-up">{ data?.priceCardHeadingOTP && <div className="leading-8 herbaly__priceCardHeadingOTP" dangerouslySetInnerHTML={{ __html: data?.priceCardHeadingOTP || "" }}></div> }</span>
                                        </div>

                                        { data?.InstantSavings && <p className="text-center mb-3" style={{ color: data?.InstantSavings?.instantSavingsColor }}>{ data?.InstantSavings?.instantSavingsLabel}<span className="instantSaving">{ data?.InstantSavings?.SUBSInstantSavings }</span></p> }

                                        <div className="flipper-container">
                                            <div className="flip">
                                                <div className="front face text-center">
                                                    { data?.cardImages?.subImage && <Image
                                                    src={ data?.cardImages?.subImage }
                                                    width={1000}
                                                    height={1000}
                                                    quality={100}
                                                    className="w-full h-full mx-auto object-contain max-w-[300px] max-h-[350px]"
                                                    alt="Herbaly Marketplace"
                                                    loading="lazy"
                                                /> }
                                                </div>
                                                <div className="back face">
                                                    { data?.cardImages?.otpImage && <Image
                                                        src={ data?.cardImages?.otpImage }
                                                        width={1000}
                                                        height={1000}
                                                        quality={100}
                                                        className="w-full h-full mx-auto mb-5 object-contain max-w-[300px] max-h-[350px]"
                                                        alt="Herbaly Marketplace"
                                                        loading="lazy"
                                                    /> }
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-end gap-10 justify-center'><h1 className='text-center relative'>$<span className="dynamic_price">{ data?.pricingSection?.SUBSPrice.substring(0, data?.pricingSection?.SUBSPrice.indexOf('.')) }</span><sup className='superscript absolute text-2xl max-[600px]:text-base'>{ data?.pricingSection?.SUBSPrice.substring(data?.pricingSection?.SUBSPrice.indexOf('.')) }</sup></h1><span className="dynamic_price_info text-2xl" dangerouslySetInnerHTML={{ __html: data?.pricingSection?.perUnitText || "/bag" }}></span></div>
                                            <div className="heading__container price_optional mt-2">
                                                <span className="label-up"><div className="text-center text-xl price_optional_label" dangerouslySetInnerHTML={{ __html: data?.pricingSection?.optionalTextField || "" }}></div></span>
                                                <span className="label-up"><div className="text-center text-xl price_optional_label" dangerouslySetInnerHTML={{ __html: data?.pricingSection?.optionalTextFieldOTP || "" }}></div></span>
                                            </div>  
                                        </div>

                                        <div className="radioContainer max-w-[250px] m-auto">
                                            { data?.OneTimeOption?.Title && <div
                                                data-product-quantity={ data?.productQuantity } 
                                                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => 
                                                        oneTimePurchase(e as unknown as Event, 
                                                                        data?.OneTimeOption?.Link as String, 
                                                                        data?.pricingSection.OTPPrice as String, 
                                                                        data?.productQuantity as String, 
                                                                        data?.totalAmountOTP as String, 
                                                                        data?.totalAmountSUB as String,
                                                                        data?.OneTimeOption?.Title as String,      
                                                                        data?.SusbcriptionOptions?.Title as String,
                                                                        data?.pricingSection.SUBSPrice as any,
                                                                        data?.pricingSection.OTPPrice as any,
                                                                        data?.InstantSavings?.SUBSInstantSavings as number,
                                                                        data?.InstantSavings?.OTPInstantSavings as number,
                                                                        data?.cardImages?.otpImage as File,
                                                                        mobileCondensedDesign as any, 
                                                                        data?.priceCardHeading as any,
                                                                        data?.priceCardHeadingOTP as any  )}
                                                className="flex flex-wrap max-w-96 justify-between items-center mt-4 cursor-pointer oneTimeRadio">
                                                <div className="flex items-center gap-x-2 pointer-events-none">
                                                    <div>
                                                        <label className="checkbox">
                                                            <input type="checkbox" />
                                                            <div className="check"></div>
                                                        </label>
                                                    </div>
                                                    <div className="text-md" dangerouslySetInnerHTML={{ __html: data?.OneTimeOption?.Title || "" }}></div>
                                                </div>
                                            </div> }
                                            <div className='max-w-96 my-4 mx-1 text-left'>
                                                <div data-product-quantity={ data?.productQuantity }
                                                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => 
                                                            subscriptionPurchase(e as unknown as Event, 
                                                                                data?.SusbcriptionOptions?.Link as String, 
                                                                                data?.pricingSection.SUBSPrice as String, 
                                                                                data?.productQuantity as String, 
                                                                                data?.totalAmountSUB as String, 
                                                                                data?.totalAmountOTP as String,
                                                                                data?.SusbcriptionOptions?.Title as String,
                                                                                data?.OneTimeOption?.Title as String,      
                                                                                data?.pricingSection.SUBSPrice as any,
                                                                                data?.pricingSection.OTPPrice as any,
                                                                                data?.InstantSavings?.SUBSInstantSavings as number,
                                                                                data?.InstantSavings?.OTPInstantSavings as number,
                                                                                data?.cardImages?.otpImage as File,
                                                                                mobileCondensedDesign as any, 
                                                                                data?.priceCardHeading as any,
                                                                                data?.priceCardHeadingOTP as any )} 
                                                    className="flex flex-wrap max-w-96 justify-between items-center cursor-pointer subscriptionRadio">
                                                    <div className="flex items-start gap-x-2 pointer-events-none">
                                                        <div>
                                                            <label className="checkbox selected">
                                                                <input type="checkbox" />
                                                                <div className="check"></div>
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <div className="leading-[22px]" dangerouslySetInnerHTML={{ __html: data?.SusbcriptionOptions?.Title || "" }}></div>
                                                            <div className="leading-5" dangerouslySetInnerHTML={{ __html: data?.SusbcriptionOptions?.PurchaseOption || "" }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    {data?.SlideButton?.SlideDefaultLink}
                                    { CampaignName != null ? 
                                        <a target="_blank" id={`add_to_cart_${index+1}`} data-campaign-name={CampaignName} data-product-title={ productDetails?.productTitle } data-product-id={ productDetails?.productID } data-variant-id={ productDetails?.productVariantID } data-product-price={ data?.pricingSection?.SUBSPrice } data-product-quantity={ data?.productQuantity } className="slideButton" 
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
                                        <a target="_blank" id={`add_to_cart_${index+1}`} data-product-title={ productDetails?.productTitle } data-product-id={ productDetails?.productID } data-variant-id={ productDetails?.productVariantID } data-product-price={ data?.pricingSection?.SUBSPrice } data-product-quantity={ data?.productQuantity } className="slideButton" 
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

                                    <div className="text-center m-1">
                                        <p style={{ color: data?.totalAmountColor }}>{ data?.totalAmountLabel }<span className="dynamic_pricing">{ data?.totalAmountSUB }</span></p>
                                    </div>
                                    
                                    <div>
                                        <p style={{ color: data?.StockLabel?.labelColor }} className='text-center font-medium text-base	leading-7 mb-3'>{data?.StockLabel?.text}</p>
                                    </div>
                                    <div className='flex justify-center items-center gap-1 my-3'>
                                        { data?.GuaranteeContainer?.image  && <Image
                                            src={ data?.GuaranteeContainer?.image }
                                            width={25}
                                            height={25}
                                            quality={90}
                                            className='object-contain'
                                            alt="Herbaly Marketplace Inc"
                                            loading="lazy"
                                        />}
                                        <p style={{ color: "" }} className='text-[16px] font-normal leading-5 not-italic'>{data?.GuaranteeContainer?.text}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>

                    {/* Condense Mobile Version */}
                    { mobileCondensedDesign && <div className={`flex gap-4 max-[1024px]:gap-8 max-[1024px]:flex-col-reverse w-[100%] xl:w-[1280px] max-[1024px]:max-w-[500px] max-w-screen-2xl m-auto herbaly_price_card_mobile`}>
                        { priceCards.map((data: any, index: any) => (  
                            <>
                                <div style={{ background: data?.cardBackground, border: data?.cardBorderColor? data?.cardBorderColor:  '2px solid #363636' }} className={` ${ mobileCondensedDesign? 'hidden' : 'block' } relative border-2 max-[640px]:max-w-[425px] m-auto mb-0 rounded-lg slideContainer w-[95%] min-[1025px]:w-[33.33%]`} key={index * Math.random()}>
                                    { data?.cardLabelBackground && <div style={{ background: data?.cardLabelBackground != undefined? data?.cardLabelBackground : '#fff' }} className="text-center p-2 rounded-t-lg">
                                        { data?.priceCardLabel && <div className="customRichText font-bold" dangerouslySetInnerHTML={{ __html: data?.priceCardLabel || "" }}></div> }
                                    </div> }
                        
                                    <div className="text-center m-1">
                                        <p style={{ color: data?.totalAmountColor }}>{ data?.totalAmountLabel }<span className="dynamic_pricing">{ data?.totalAmountSUB }</span></p>
                                    </div>
                                    
                                    <div>
                                        <p style={{ color: data?.StockLabel?.labelColor }} className='text-center font-medium text-base	leading-7 mb-3'>{data?.StockLabel?.text}</p>
                                    </div>
                                    <div className='flex justify-center items-center gap-2 my-3'>
                                        { data?.GuaranteeContainer?.image  && <Image
                                            src={ data?.GuaranteeContainer?.image }
                                            width={25}
                                            height={25}
                                            quality={90}
                                            className='object-contain'
                                            alt="Herbaly Marketplace Inc"
                                            loading="lazy"
                                        />}
                                        <p style={{ color: "" }} className='text-[16px] font-normal leading-5 not-italic'>{data?.GuaranteeContainer?.text}</p>
                                    </div>
                                </div>

                                {/* // Condensed Design: Desktop */}
                                <div style={{ background: data?.cardBackground != undefined? data?.cardBackground : "#fff", border: data?.cardBorderColor? data?.cardBorderColor:  '2px solid #363636' }} className={` ${ mobileCondensedDesign? 'block' : 'hidden' } relative border-2 max-[640px]:max-w-[425px] m-auto mb-0 rounded-lg slideContainer w-[95%] min-[1025px]:w-[33.33%]`} key={index * Math.random()}>
                                    { data?.priceCardLabel && <div style={{ background: data?.cardLabelBackground != undefined? data?.cardLabelBackground : '#fff', display: data?.priceCardLabel.trim().length === 0 ? "none": "block"}} className="text-center p-2 max-[640px]:p1 rounded-t-lg">
                                        { data?.priceCardLabel && <div className="customRichText font-bold max-[640px]:text-xl" dangerouslySetInnerHTML={{ __html: data?.priceCardLabel || "" }}></div> }
                                </div> }

                                <div className='max-[1024px]:hidden text-center'>
                                    <div className="heading__container mt-8 pb-2 max-[1024px]:hidden">
                                        <span className="label-up">{ data?.priceCardHeading && <div className="leading-8 herbaly__priceCardHeading" dangerouslySetInnerHTML={{ __html: data?.priceCardHeading || "" }}></div> }</span>
                                        <span className="label-up">{ data?.priceCardHeadingOTP && <div className="leading-8 herbaly__priceCardHeadingOTP" dangerouslySetInnerHTML={{ __html: data?.priceCardHeadingOTP || "" }}></div> }</span>
                                    </div>
                                    { data?.InstantSavings && <p className="text-center mb-3 max-[1024px]:hidden" style={{ color: data?.InstantSavings?.instantSavingsColor }}>{ data?.InstantSavings?.instantSavingsLabel}<span className="instantSaving">{ data?.InstantSavings?.SUBSInstantSavings }</span></p> }
                                    
                                    <div className="flipper-container">
                                        <div className="flip">
                                            <div className="front face text-center">
                                                { data?.cardImages?.subImage && <Image
                                                src={ data?.cardImages?.subImage }
                                                width={1000}
                                                height={1000}
                                                quality={100}
                                                className="w-full h-full mx-auto object-contain max-w-[300px] max-h-[350px]"
                                                alt="Herbaly Marketplace"
                                                loading="lazy"
                                            /> }
                                            </div>
                                            <div className="back face">
                                                { data?.cardImages?.otpImage && <Image
                                                    src={ data?.cardImages?.otpImage }
                                                    width={1000}
                                                    height={1000}
                                                    quality={100}
                                                    className="w-full h-full mx-auto mb-5 object-contain max-w-[300px] max-h-[350px]"
                                                    alt="Herbaly Marketplace"
                                                    loading="lazy"
                                                /> }
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='flex items-end gap-10 justify-center'><h1 className='text-center relative'>$<span className="dynamic_price">{ data?.pricingSection?.SUBSPrice.substring(0, data?.pricingSection?.SUBSPrice.indexOf('.')) }</span><sup className='superscript absolute text-2xl max-[600px]:text-base'>{ data?.pricingSection?.SUBSPrice.substring(data?.pricingSection?.SUBSPrice.indexOf('.')) }</sup></h1><span className="dynamic_price_info text-2xl" dangerouslySetInnerHTML={{ __html: data?.pricingSection?.perUnitText || "/bag" }}></span></div>  
                                        <div className="heading__container price_optional mt-2">
                                            <span className="label-up"><div className="text-center text-xl price_optional_label" dangerouslySetInnerHTML={{ __html: data?.pricingSection?.optionalTextField || "" }}></div></span>
                                            <span className="label-up"><div className="text-center text-xl price_optional_label" dangerouslySetInnerHTML={{ __html: data?.pricingSection?.optionalTextFieldOTP || "" }}></div></span>
                                        </div>  
                                    </div>
                                    <div className="radioContainer max-w-[250px] m-auto">
                                        { data?.OneTimeOption?.Title && <div
                                            data-product-quantity={ data?.productQuantity } 
                                            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => 
                                                    oneTimePurchase(e as unknown as Event, 
                                                                    data?.OneTimeOption?.Link as String, 
                                                                    data?.pricingSection.OTPPrice as String, 
                                                                    data?.productQuantity as String, 
                                                                    data?.totalAmountOTP as String, 
                                                                    data?.totalAmountSUB as String,
                                                                    data?.OneTimeOption?.Title as String,      
                                                                    data?.SusbcriptionOptions?.Title as String,
                                                                    data?.pricingSection.SUBSPrice as any,
                                                                    data?.pricingSection.OTPPrice as any,
                                                                    data?.InstantSavings?.SUBSInstantSavings as number,
                                                                    data?.InstantSavings?.OTPInstantSavings as number,
                                                                    data?.cardImages?.otpImage as File,
                                                                    mobileCondensedDesign as any, 
                                                                    data?.priceCardHeading as any,
                                                                    data?.priceCardHeadingOTP as any )}
                                            className="flex flex-wrap max-w-96 justify-between items-center mx-1 cursor-pointer oneTimeRadio">
                                            <div className="flex items-center gap-x-1 pointer-events-none">
                                                <div>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        <div className="check"></div>
                                                    </label>
                                                </div>
                                                <div className="text-md" dangerouslySetInnerHTML={{ __html: data?.OneTimeOption?.Title || "" }}></div>
                                            </div>
                                        </div> }
                                        <div className='max-w-96 my-4 mx-1 text-left'>
                                            <div data-product-quantity={ data?.productQuantity }
                                                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => 
                                                        subscriptionPurchase(e as unknown as Event, 
                                                                            data?.SusbcriptionOptions?.Link as String, 
                                                                            data?.pricingSection.SUBSPrice as String, 
                                                                            data?.productQuantity as String, 
                                                                            data?.totalAmountSUB as String, 
                                                                            data?.totalAmountOTP as String,
                                                                            data?.SusbcriptionOptions?.Title as String,
                                                                            data?.OneTimeOption?.Title as String,      
                                                                            data?.pricingSection.SUBSPrice as any,
                                                                            data?.pricingSection.OTPPrice as any,
                                                                            data?.InstantSavings?.SUBSInstantSavings as number,
                                                                            data?.InstantSavings?.OTPInstantSavings as number,
                                                                            data?.cardImages?.otpImage as File,
                                                                            mobileCondensedDesign as any,
                                                                            data?.priceCardHeading as any,
                                                                            data?.priceCardHeadingOTP as any )} 
                                                className="flex flex-wrap max-w-96 justify-between items-center cursor-pointer subscriptionRadio">
                                                <div className="flex items-start gap-x-2 pointer-events-none">
                                                    <div>
                                                        <label className="checkbox selected">
                                                            <input type="checkbox" />
                                                            <div className="check"></div>
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <div className="leading-[22px]" dangerouslySetInnerHTML={{ __html: data?.SusbcriptionOptions?.Title || "" }}></div>
                                                        <div className="leading-5" dangerouslySetInnerHTML={{ __html: data?.SusbcriptionOptions?.PurchaseOption || "" }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>   
                                </div>

                                <div className='mobileCondensedDesign min-[1024px]:hidden px-2'>
                                    <div className='flex mt-4'>
                                        <div style={{ "height": "auto" }} className="flipper-container w-[50%] h-auto">
                                            <div className="flip">
                                                <div className="front face text-center">
                                                    { data?.cardImages?.subImage && <Image
                                                    src={ data?.cardImages?.subImage }
                                                    width={1000}
                                                    height={1000}
                                                    quality={100}
                                                    className="w-full h-full mx-auto object-contain max-w-[300px] max-h-[350px]"
                                                    alt="Herbaly Marketplace"
                                                    loading="lazy"
                                                /> }
                                                </div>
                                                <div className="back face">
                                                    { data?.cardImages?.otpImage && <Image
                                                        src={ data?.cardImages?.otpImage }
                                                        width={1000}
                                                        height={1000}
                                                        quality={100}
                                                        className="w-full h-full mx-auto mb-5 object-contain max-w-[300px] max-h-[350px]"
                                                        alt="Herbaly Marketplace"
                                                        loading="lazy"
                                                    /> }
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-[50%]'>  
                                            <div className="heading__container">
                                                <span className="label-up">{ data?.priceCardHeading && <div className="leading-8 herbaly__priceCardHeading" dangerouslySetInnerHTML={{ __html: data?.priceCardHeading || "" }}></div> }</span>
                                                <span className="label-up">{ data?.priceCardHeadingOTP && <div className="leading-8 herbaly__priceCardHeadingOTP" dangerouslySetInnerHTML={{ __html: data?.priceCardHeadingOTP || "" }}></div> }</span>
                                            </div>

                                            { data?.InstantSavings && <p className="text-left" style={{ color: data?.InstantSavings?.instantSavingsColor }}>{ data?.InstantSavings?.instantSavingsLabel}<span className="instantSaving">{ data?.InstantSavings?.SUBSInstantSavings }</span></p> }
                                            
                                            <div className='flex items-end gap-2 max-[600px]:my-2 my-4'>
                                                <div className='flex items-end gap-6 lg:gap-10 justify-center'><h1 className='text-center relative'>$<span className="dynamic_price">{ data?.pricingSection?.SUBSPrice.substring(0, data?.pricingSection?.SUBSPrice.indexOf('.')) }</span><sup className='superscript absolute top-[-0.3rem] text-2xl max-[600px]:text-base'>{ data?.pricingSection?.SUBSPrice.substring(data?.pricingSection?.SUBSPrice.indexOf('.')) }</sup></h1><span className="dynamic_price_info text-2xl" dangerouslySetInnerHTML={{ __html: data?.pricingSection?.perUnitText || "/bag" }}></span></div>
                                                <div className="heading__container price_optional mt-2">
                                                    <span className="label-up"><div className="text-center text-xl price_optional_label" dangerouslySetInnerHTML={{ __html: data?.pricingSection?.optionalTextField || "" }}></div></span>
                                                    <span className="label-up"><div className="text-center text-xl price_optional_label" dangerouslySetInnerHTML={{ __html: data?.pricingSection?.optionalTextFieldOTP || "" }}></div></span>
                                                </div>  
                                            </div>                 
                                            <div className="radioContainer max-w-[250px] m-auto">
                                                { data?.OneTimeOption?.Title && <div
                                                    data-product-quantity={ data?.productQuantity } 
                                                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => 
                                                            oneTimePurchase(e as unknown as Event, 
                                                                            data?.OneTimeOption?.Link as String, 
                                                                            data?.OneTimeOption?.Price as String, 
                                                                            data?.productQuantity as String, 
                                                                            data?.totalAmountOTP as String, 
                                                                            data?.totalAmountSUB as String,
                                                                            data?.OneTimeOption?.Title as String,      
                                                                            data?.SusbcriptionOptions?.Title as String,
                                                                            data?.pricingSection.SUBSPrice as any,
                                                                            data?.pricingSection.OTPPrice as any,
                                                                            data?.InstantSavings?.SUBSInstantSavings as number,
                                                                            data?.InstantSavings?.OTPInstantSavings as number,
                                                                            data?.cardImages?.otpImage as File,
                                                                            mobileCondensedDesign as any,
                                                                            data?.priceCardHeading as any,
                                                                            data?.priceCardHeadingOTP as any  )}
                                                    className="flex flex-wrap max-w-96 justify-between items-center mt-4 cursor-pointer oneTimeRadio">
                                                    <div className="flex items-center gap-x-2 pointer-events-none">
                                                        <div>
                                                            <label className="checkbox">
                                                                <input type="checkbox" />
                                                                <div className="check"></div>
                                                            </label>
                                                        </div>
                                                        <div className="text-md" dangerouslySetInnerHTML={{ __html: data?.OneTimeOption?.Title || "" }}></div>
                                                    </div>
                                                </div> }
                                                <div className='max-w-96 my-2'>
                                                    <div data-product-quantity={ data?.productQuantity }
                                                        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => 
                                                                subscriptionPurchase(e as unknown as Event, 
                                                                                    data?.SusbcriptionOptions?.Link as String, 
                                                                                    data?.SusbcriptionOptions?.Price as String, 
                                                                                    data?.productQuantity as String, 
                                                                                    data?.totalAmountSUB as String, 
                                                                                    data?.totalAmountOTP as String,
                                                                                    data?.SusbcriptionOptions?.Title as String,
                                                                                    data?.OneTimeOption?.Title as String,      
                                                                                    data?.pricingSection.SUBSPrice as any,
                                                                                    data?.pricingSection.OTPPrice as any,
                                                                                    data?.InstantSavings?.SUBSInstantSavings as number,
                                                                                    data?.InstantSavings?.OTPInstantSavings as number,
                                                                                    data?.cardImages?.otpImage as File,
                                                                                    mobileCondensedDesign as any ,
                                                                                    data?.priceCardHeading as any,
                                                                                    data?.priceCardHeadingOTP as any   )} 
                                                        className="flex flex-wrap max-w-96 justify-between items-center cursor-pointer subscriptionRadio">
                                                        <div className="flex items-start gap-x-2 pointer-events-none">
                                                            <div>
                                                                <label className="checkbox selected">
                                                                    <input type="checkbox" />
                                                                    <div className="check"></div>
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <div className="leading-[22px]" dangerouslySetInnerHTML={{ __html: data?.SusbcriptionOptions?.Title || "" }}></div>
                                                                <div className="leading-5" dangerouslySetInnerHTML={{ __html: data?.SusbcriptionOptions?.PurchaseOption || "" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>   
                                        </div>
                                    </div>
                                </div>   
                                { CampaignName != null ? 
                                    <a target="_blank" id={`add_to_cart_${index+1}`} data-campaign-name={CampaignName} data-product-title={ productDetails?.productTitle } data-product-id={ productDetails?.productID } data-variant-id={ productDetails?.productVariantID } data-product-price={ data?.pricingSection?.SUBSPrice } data-product-quantity={ data?.productQuantity } className="slideButton" 
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
                                    <a target="_blank" id={`add_to_cart_${index+1}`} data-product-title={ productDetails?.productTitle } data-product-id={ productDetails?.productID } data-variant-id={ productDetails?.productVariantID } data-product-price={ data?.pricingSection?.SUBSPrice } data-product-quantity={ data?.productQuantity } className="slideButton" 
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

                                <div className="text-center m-1">
                                    <p style={{ color: data?.totalAmountColor }}>{ data?.totalAmountLabel }<span className="dynamic_pricing">{ data?.totalAmountSUB }</span></p>
                                </div>
                                
                                <div>
                                    <p style={{ color: data?.StockLabel?.labelColor }} className='text-center font-medium text-base	leading-7 mb-3'>{data?.StockLabel?.text}</p>
                                </div>
                                <div className='flex justify-center items-center gap-1 mb-4'>
                                    { data?.GuaranteeContainer?.image  && <Image
                                        src={ data?.GuaranteeContainer?.image }
                                        width={25}
                                        height={25}
                                        quality={90}
                                        className='object-contain max-[640px]:w-[14px] max-[640px]:h-[14px]'
                                        alt="Herbaly Marketplace Inc"
                                        loading="lazy"
                                    />}
                                    <p style={{ color: "" }} className='text-[16px] font-normal leading-5 not-italic max-[640px]:text-xs'>{data?.GuaranteeContainer?.text}</p>
                                </div>
                                </div>
                            </>
                        ))}
                    </div> }
                </>
            )}
        </>
      );
}

export default HerbalyPriceCard;
