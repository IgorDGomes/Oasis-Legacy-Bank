import { Accessibility, Globe, GraphUp, Heart, Lock } from "iconoir-react";

export function Features() {
    return (
        <div className="features text-white">
            <div className="grid grid-cols-5 max-w-[1440px] mx-auto gap-8 place-items-start py-10">
                <div className="flex flex-col gap-5 items-center p-5">
                    <Lock width={50} height={50} />
                    <p className="text-lg font-semibold">Your safety is our top priority</p>
                    <p className="">We&apos;ve implemented the latest security measures to protect your money and personal information.</p>
                </div>
                <div className="flex flex-col gap-5 items-center p-5">
                    <GraphUp width={50} height={50} />
                    <p className="text-lg font-semibold">Financial growth</p>
                    <p className="">Choose our bank, where your wealth is on the rise. With smart financial solutions and steady growth, we&apos;re here to help individuals and businesses build and increase their wealth.</p>
                </div>
                <div className="flex flex-col gap-5 items-center p-5">
                    <Globe width={50} height={50} />
                    <p className="text-lg font-semibold">Our bank is a top choice worldwide</p>
                    <p className="">Whether you&apos;re an individual or a business, we offer top-notch financial solutions with a commitment to excellence.</p>
                </div>
                <div className="flex flex-col gap-5 items-center p-5">
                    <Accessibility width={50} height={50} />
                    <p className="text-lg font-semibold">Accessbility</p>
                    <p className="">Our bank is easily accessible with numerous branches and ATMs, making it convenient for you to find us wherever you go.</p>
                </div>
                <div className="flex flex-col gap-5 items-center p-5">
                    <Heart width={50} height={50} />
                    <p className="text-lg font-semibold">Your favorite Bank</p>
                    <p className="">Our bank is a favorite among people because of the trust and satisfaction we bring to our customers.</p>
                </div>
            </div>
        </div>
    )
}