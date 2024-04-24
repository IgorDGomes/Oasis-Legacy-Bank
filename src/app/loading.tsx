import { LoaderCircle } from "lucide-react";

export default function Loading() {
    return (
        <div className="w-full h-[calc(100svh-80px)] flex flex-col items-center justify-center gap-5 absolute bg-white z-[10]">
            <LoaderCircle className="animate-spin size-20" />
            <span className="font-medium text-xl">Please wait...</span>
        </div>
    )
}