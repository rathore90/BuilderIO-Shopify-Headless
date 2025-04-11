"use client";
import Image from 'next/image'

export default function loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Image
                src='https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2F1a05a23727d14b80be8ded61b11930c5'
                width={175}
                height={100}
                className="object-contain"
                alt="Herbaly Marketplace"
                priority={true}
            />
        </div>

    )
}
