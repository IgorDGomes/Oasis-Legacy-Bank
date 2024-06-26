import { Chat } from '@/components/support/main'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'OLB | AI Chat Support'
}

export default function CustomerAssistence() {
    return (
        <div className='w-full h-fit'>
            <Chat />
        </div>
    )
}