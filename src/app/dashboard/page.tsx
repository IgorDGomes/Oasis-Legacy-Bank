"use client"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

export default function Dashboard() {
    
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: -3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: -2000,
            pv: -9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: -1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: -3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className='flex flex-col gap-10 lg:max-w-[1440px] mx-auto pb-10'>
            <div className="grid grid-cols-3">
                <div className="col-span-1 bg-black/60">
                    <div className="w-full">
                        <ul className="flex flex-col items-center justify-center">
                            <li className="w-full text-center">
                                <button type="button" className="w-full py-1.5 hover:bg-black/10 transition-colors duration-200">Total Balance</button>
                            </li>
                            <div className="h-[1px] bg-black w-full" />
                            <li className="w-full text-center">
                                <button type="button" className="w-full py-1.5 hover:bg-black/10 transition-colors duration-200">Payments</button>
                            </li>
                            <div className="h-[1px] bg-black w-full" />
                            <li className="w-full text-center">
                                <button type="button" className="w-full py-1.5 hover:bg-black/10 transition-colors duration-200">Contacts</button>
                            </li>
                            <div className="h-[1px] bg-black w-full" />
                            <li className="w-full text-center">
                                <button type="button" className="w-full py-1.5 hover:bg-black/10 transition-colors duration-200">History</button>
                            </li>
                            <div className="h-[1px] bg-black w-full" />
                            <li className="w-full text-center">
                                <button type="button" className="w-full py-1.5 hover:bg-black/10 transition-colors duration-200">Help</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-2 bg-black/20">
                    <div className='w-full h-full'>
                        {/* ! Need to fix */}
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <ReferenceLine y={0} stroke="#000" />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}