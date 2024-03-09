export function Login() {
    return (
        <div className="flex flex-col gap-20 items-end justify-center h-full">
            <div className="flex flex-col gap-5 bg-black/50 px-10 pt-10 pb-5 rounded-lg mb-10">
                <span className="font-semibold text-[28px] text-white pb-5 text-center">Login</span>
                <form className="flex flex-col gap-5">
                    <div className="flex justify-between gap-20">
                        <label htmlFor="email" className="text-white font-medium">Username:</label>
                        <input type="email" id="email" className="outline-none px-3 py-1 rounded-md focus:outline-3 focus:outline-button -outline-offset-1 text-sm w-[215px] h-[32px] transition-colors duration-[400ms] hover:bg-white/75" required />
                    </div>
                    <div className="flex justify-between gap-20">
                        <label htmlFor="password" className="text-white font-medium">Password:</label>
                        <input type="password" id="password" className="outline-none px-3 py-1 rounded-md focus:outline-3 focus:outline-button -outline-offset-1 text-sm w-[215px] h-[32px] transition-colors duration-[400ms] hover:bg-white/75" required />
                    </div>
                    <div className="text-center py-2">
                        <button type="submit" className="bg-orange-500 px-8 py-1 rounded-lg hover:bg-orange-500/80 transition-colors duration-[400ms]">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}