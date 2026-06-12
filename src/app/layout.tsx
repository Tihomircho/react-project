import "./App.css";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Menu/Menu";
import CookieConsent from "../Components/CookieConsent/CookieConsent";
import Script from "next/script";
import MessengerChat from "../Components/MessengerChat/MessengerChat";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://remontisofia.eu"),
  title: {
    default: "Ремонти София | Професионални Строителни Услуги",
    template: "%s | Ремонти София", // Позволява динамични заглавия за други страници
  },
  description:
    "Качествени ремонтни дейности в София. Измазване, шпакловка, боядисване, сухо строителство и плочки на достъпни цени.",

  // Ето тук указваме index, follow за търсачките
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Основни настройки за споделяне в социалните мрежи
  openGraph: {
    title: "Ремонти София | Строителни Услуги",
    description: "Професионални ремонтни дейности в София на достъпни цени.",
    url: "https://remontisofia.eu",
    siteName: "Ремонти София",
    locale: "bg_BG",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"
        />
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://facebook.net');
            fbq('init', '2295146530752579');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <div className="App">
          <header className="App-header">
            <Menu />
          </header>
          {children}
          <CookieConsent />
          <Footer />
          <MessengerChat pageId="1149109784954230" viberNumber="359894376062" />
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
