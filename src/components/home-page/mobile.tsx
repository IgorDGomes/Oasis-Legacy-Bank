import Image from "next/image";
import PhoneApp from "../../assets/PhoneApp.png";
import Link from "next/link";

export function Mobile() {
    return (
        <div className="bg-main/20 rounded-ee-[300px] rounded-ss-[300px] my-10 mx-2">
            <div className="max-w-[1000px] mx-auto flex items-center justify-between gap-12 py-10">
                <div className="max-w-[300px]">
                    <Image src={PhoneApp} width={250} height={500} alt="" className="phone" />
                </div>
                <div className="max-w-[600px] flex flex-col gap-5">
                    <p className="text-3xl font-semibold">Banking made easy, right at your fingertips!</p>
                    <p className="text-lg font-medium">With our app, managing your finances is more convenient than ever, offering features such as secure transactions, easy access to account balances and transaction history, mobile check deposits, fund transfers, and bill payments.</p>
                    <Link href='/mobile-app' className="bg-button text-black/70 w-fit font-semibold text-xl py-2 px-6 rounded-2xl hover:bg-orange-500/80 hover:text-black transition-colors duration-300 mx-auto">Download</Link>
                </div>
            </div>
        </div>
    )
}