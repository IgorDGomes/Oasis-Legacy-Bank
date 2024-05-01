import Link from "next/link";

export default function Categories() {
    return (
        <>
            <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-semibold">Categories</h2>
                <div className="grid grid-cols-4 gap-y-8 border py-10 pl-10 rounded-2xl shadow-xl">
                    <div className="flex flex-col gap-2">
                        <Link href={"/"} className="text-lg font-semibold">Credit Cards</Link>
                        <ul className="flex flex-col ml-10 gap-2 list-disc">
                            <li className="underline"><Link href={"/"}>Our Cards</Link></li>
                            <li className="underline"><Link href={"/"}>Rewards Credit Cards</Link></li>
                            <li className="underline"><Link href={"/"}>Travel Credit Cards</Link></li>
                            <li className="underline"><Link href={"/"}>Card FAQ&apos;s</Link></li>
                            <li className="underline"><Link href={"/"}>Increase Limit</Link></li>
                            <li className="underline"><Link href={"/"}>Credit Score</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href={"/"} className="text-lg font-semibold">Partners</Link>
                        <ul className="flex flex-col ml-10 gap-2 list-disc">
                            <li className="underline"><Link href={"/"}>Partners</Link></li>
                            <li className="underline"><Link href={"/"}>Discounts</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href={"/"} className="text-lg font-semibold">Support</Link>
                        <ul className="flex flex-col ml-10 gap-2 list-disc">
                            <li className="underline"><Link href={"/"}>Support Team</Link></li>
                            <li className="underline"><Link href={"/"}>AI Support Chat</Link></li>
                            <li className="underline"><Link href={"/"}>FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href={"/"} className="text-lg font-semibold">Business</Link>
                        <ul className="flex flex-col ml-10 gap-2 list-disc">
                            <li className="underline"><Link href={"/"}>Business Credit Card</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href={"/"} className="text-lg font-semibold">Students</Link>
                        <ul className="flex flex-col ml-10 gap-2 list-disc">
                            <li className="underline"><Link href={"/"}>Student Loans</Link></li>
                            <li className="underline"><Link href={"/"}>Student Banking FAQ&apos;s</Link></li>
                            <li className="underline"><Link href={"/"}>Student Credit Card</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href={"/"} className="text-lg font-semibold">Banking</Link>
                        <ul className="flex flex-col ml-10 gap-2 list-disc">
                            <li className="underline"><Link href={"/"}>Create Account</Link></li>
                            <li className="underline"><Link href={"/"}>Investments</Link></li>
                            <li className="underline"><Link href={"/"}>ATMs</Link></li>
                            <li className="underline"><Link href={"/"}>Branch Locator</Link></li>
                            <li className="underline"><Link href={"/"}>Online Banking</Link></li>
                            <li className="underline"><Link href={"/"}>Mobile App</Link></li>
                            <li className="underline"><Link href={"/"}>Refer a Friend</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}