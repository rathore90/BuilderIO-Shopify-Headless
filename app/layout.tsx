import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
const GTM_ID = 'GTM-M7F54HJ';

const poppins = Poppins({   
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Herbaly | Herbal Tea, Wellness Tea Inspired by Natural Health',
  description: 'Herbaly formulates Herbal Tea to pursue Herbal Wellness. Sugar Balance, Blood Pressure tea, Skinny tea, Sleep tea. Made with Organic Herbs such as Hibiscus, Turmeric, Ginger, Lavender, Chamomile, Rooibos, Fenugreek, Echinacea, St Johns Wort, Lemon Balm, Gotu Kola, Bacopa, Rhodiola Rosea or Gymnema Sylvestre.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <body className={poppins.className}>
        {children}
        <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload"></Script>
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');

            window.dataLayer = window.dataLayer || [];
            window._wq = window._wq || [];
          `}
        </Script>
        <Script id="getElevar-script" strategy="beforeInteractive">{`
          async function asyncCallGetElevar() {
            try {
              const response = await fetch("https://shopify-gtm-suite.getelevar.com/configs/44a095e8c488d5e36978b0a113557a1c5378532c/config.json");
              const config = await response.json();
              const scriptUrl = config.script_src_custom_pages;
  
              if (scriptUrl) {
                const { handler } = await import(scriptUrl);
                await handler(config);
              }
            } catch (error) {
              console.error("Elevar Error:", error);
            }
          }
          asyncCallGetElevar();
        `}
        </Script>
        <noscript
            dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      </body>
    </html>
  )
}
