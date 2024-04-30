import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FAQ() {
    return (
        <div className='w-[1400px] mx-auto'>
            <Accordion collapsible type='single'>
                <AccordionItem value='faq-1'>
                    <AccordionTrigger>
                        How do I open an account?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can open an account online by visiting our website and following the steps outlined in our account opening section. Alternatively, you can visit one of our branches for assistance.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='faq-2'>
                    <AccordionTrigger>
                        What documents do I need to open an account?
                    </AccordionTrigger>
                    <AccordionContent>
                        Generally, you will need a valid government-issued photo ID (such as a driver&apos;s license or passport) and proof of address (such as a utility bill or rental agreement).
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='faq-3'>
                    <AccordionTrigger>
                        How do I log in to my online banking account?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can log in to your online banking account using the username and password you created during the registration process. If you have forgotten your login credentials, you can reset them using the &quot;<span className='font-semibold'>Forgot Password</span>&quot; option on the login page.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='faq-4'>
                    <AccordionTrigger>
                        Is online banking secure?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, we take the security of your information very seriously. Our online banking platform uses industry-standard encryption and security measures to ensure that your personal and financial information is protected.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='faq-5'>
                    <AccordionTrigger>
                        How can I reset my online banking password?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can reset your online banking password by clicking on the &quot;<span className='font-semibold'>Forgot Password</span>&quot; link on the login page and following the instructions provided.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='faq-6'>
                    <AccordionTrigger>
                        How do I transfer money between accounts?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can transfer money between your accounts by logging in to your online banking account and selecting the &quot;<span className='font-semibold'>Transfer Funds</span>&quot; option. Follow the on-screen instructions to complete the transfer.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='faq-7'>
                    <AccordionTrigger>
                        What are your branch hours?
                    </AccordionTrigger>
                    <AccordionContent>
                        Branch hours vary by location. You can find the hours for your nearest branch by using our branch locator tool on our website.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='faq-8'>
                    <AccordionTrigger>
                        What should I do if my debit card is lost or stolen?
                    </AccordionTrigger>
                    <AccordionContent>
                        If your debit card is lost or stolen, please contact us immediately at [0-00-000-0000] to report it. We will deactivate your card to prevent any unauthorized transactions and issue you a new card.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='faq-9'>
                    <AccordionTrigger>
                        How do I set up direct deposit?
                    </AccordionTrigger>
                    <AccordionContent>
                    You can set up direct deposit by providing your employer with our routing number and your account number. You can find this information on your checks or by logging in to your online banking account.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='faq-10'>
                    <AccordionTrigger>
                        How do I contact customer service?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can contact our customer service team by phone, email, or live chat. Visit our Contact Us page for more information.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}