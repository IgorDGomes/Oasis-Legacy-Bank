import '@/styles/globals.css'

export default function InstagramLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <section>
                {children}
            </section>
        </>
    )
  }