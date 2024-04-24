export function Options() {
    return (
        <div className="max-w-[1400px] mx-auto my-20">
            <div className="flex flex-col w-[400px]">
                <div className="flex gap-4">
                    <div className="px-5 py-2 bg-zinc-200 rounded-t-md">Personal</div>
                    <div className="px-5 py-2 bg-zinc-300 rounded-t-md">Business</div>
                </div>
                <div className="flex flex-col gap-8 rounded-r-2xl rounded-b-2xl bg-zinc-200">
                    <div>Title</div>
                    <div>Title</div>
                    <div>Title</div>
                    <div>Title</div>
                    <div>Title</div>
                </div>
            </div>
        </div>
    )
}