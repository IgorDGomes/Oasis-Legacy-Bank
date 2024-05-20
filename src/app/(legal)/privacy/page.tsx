import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'OLB | Privacy'
}

export default function Privacy() {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()

    function correctDay() {
        if (day < 10) {
            return "0" + day
        }
        return day
    }

    function correctMonth() {
        if (month < 10) {
            return "0" + month
        }
        return month
    }

    return (
        <>
            <div className='max-w-[1200px] mx-auto py-20 flex flex-col gap-10'>
                <h1 className='font-bold text-3xl'>Privacy Policy</h1>
                <div className='flex flex-col gap-6 mb-5'>
                    <p>Last Updated: {`${correctDay()}/${correctMonth()}/${year}`}</p>
                    <p>Oasis Legacy operates <a href="https://oasis-legacy.com" className='text-blue-500 hover:text-blue-700 hover:underline'>oasis-legacy.com</a> (the &quot;Site&quot;). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.</p>
                    <p>We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <h3 className='text-lg font-semibold'>Information Collection and Use</h3>
                    <p className='ml-5'>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, email address, postal address, and phone number (&quot;Personal Information&quot;).</p>
                    
                    <h3 className='text-lg font-semibold'>Log Data</h3>
                    <p className='ml-5'>Like many site operators, we collect information that your browser sends whenever you visit our Site (&quot;Log Data&quot;). This Log Data may include information such as your computer&apos;s Internet Protocol (&quot;IP&quot;) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
                    
                    <h3 className='text-lg font-semibold'>Communications</h3>
                    <p className='ml-5'>We may use your Personal Information to contact you with newsletters, marketing or promotional materials, and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe instructions provided in any email we send.</p>
                    
                    <h3 className='text-lg font-semibold'>Cookies</h3>
                    <p className='ml-5'>Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer&apos;s hard drive.</p>
                    <p className='ml-5'>Like many sites, we use &quot;cookies&quot; to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>
                    
                    <h3 className='text-lg font-semibold'>Security</h3>
                    <p className='ml-5'>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
                    
                    <h3 className='text-lg font-semibold'>Changes to This Privacy Policy</h3>
                    <p className='ml-5'>This Privacy Policy is effective as of ${`${correctDay()}/${correctMonth()}/${year}`} and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
                    <p className='ml-5'>We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
                    
                    <h3 className='text-lg font-semibold'>Contact Us</h3>
                    <p className='ml-5'>If you have any questions about this Privacy Policy, please contact us.</p>
                </div>
                <div className='flex flex-col font-semibold gap-2'>
                    <p>Oasis Legacy</p>
                    <p>123 Main Street</p>
                    <p>Lisbon, 1000-001</p>
                    <p>Portugal</p>
                    <p>Email: notarealemail@oasislegacy.com</p>
                    <p>Phone: +351 123 456 789</p>
                </div>
            </div>           

            

        </>
    )
}
