"use client";
import React, { useState } from "react";
import Image from 'next/image'

interface HerbalyPaymentMethodsProps {
    PaymentMethods?: any;
}

function HerbalyPaymentMethods({ PaymentMethods }: HerbalyPaymentMethodsProps) {
  return (
    <>
        <div className="flex justify-center gap-2.5 flex-wrap px-4">
            {PaymentMethods?.map((data: any, index: any) => (
                <Image
                    src={ data?.images }
                    key= {index}
                    width={70}
                    height={40}
                    className="object-contain"
                    alt="Herbaly Marketplace"
                    loading="lazy"
                    style={{ width: "70px", height: "40px" }}
                />  
            ))}  
        </div>

    </>
  );
}

export default HerbalyPaymentMethods;
