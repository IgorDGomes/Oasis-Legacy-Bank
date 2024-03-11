import { Airplane, Computer, CreditCards, PiggyBank, ShopFourTiles, Wallet } from "iconoir-react";
import Link from "next/link";

export function Options() {
    return (
        <div className="flex flex-col gap-12 max-w-[1200px] mx-auto items-center my-24">
            <p className="text-2xl font-semibold">How can we help you today?</p>
            <div className="grid grid-cols-6 gap-8">
                <Link href='/services/credit-card' className="flex flex-col items-center justify-center gap-3 min-w-[120px] min-h-[90px] rounded-md border-[1px] hover:bg-main/70 transition-colors duration-300 hover:text-white">
                    <CreditCards width={40} height={40} />
                    <p>Credit Card</p>
                </Link>
                <Link href='/services/online-banking' className="flex flex-col items-center justify-center gap-3 min-w-[120px] min-h-[90px] rounded-md border-[1px] hover:bg-main/70 transition-colors duration-300 hover:text-white">
                    <Computer width={40} height={40} />
                    <p>Online Banking</p>
                </Link>
                <Link href='/services/loans' className="flex flex-col items-center justify-center gap-3 min-w-[120px] min-h-[90px] rounded-md border-[1px] hover:bg-main/70 transition-colors duration-300 hover:text-white">
                    <Wallet width={40} height={40} />
                    <p>Loans</p>
                </Link>
                <Link href='/services/business' className="flex flex-col items-center justify-center gap-3 min-w-[120px] min-h-[90px] rounded-md border-[1px] hover:bg-main/70 transition-colors duration-300 hover:text-white">
                    <ShopFourTiles width={40} height={40} />
                    <p>Business</p></Link>
                <Link href='/services/travel' className="flex flex-col items-center justify-center gap-3 min-w-[120px] min-h-[90px] rounded-md border-[1px] hover:bg-main/70 transition-colors duration-300 hover:text-white">
                    <Airplane width={40} height={40} />
                    <p>Travel</p>
                </Link>
                <Link href='/services/savings' className="flex flex-col items-center justify-center gap-3 min-w-[120px] min-h-[90px] rounded-md border-[1px] hover:bg-main/70 transition-colors duration-300 hover:text-white">
                    <PiggyBank width={40} height={40} />
                    <p>Savings</p>
                </Link>
            </div>
        </div>
    )
}