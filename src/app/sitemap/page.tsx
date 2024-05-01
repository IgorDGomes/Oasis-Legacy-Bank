import Categories from "@/components/sitemap/rows/categories";
import { PopularLinks } from "@/components/sitemap/rows/popular-links";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'OLB | Sitemap'
}

export default function Sitemap() {
    return (
        <>
            <div className="max-w-[1400px] mx-auto my-20 flex flex-col gap-12">
                <h1 className="text-5xl font-light">Sitemap</h1>
                <PopularLinks />
                <Categories />
            </div>
        </>
    )
}