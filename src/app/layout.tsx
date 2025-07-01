import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jared Sher",
  description: "Jared Sher portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="/fontawesome/css/fontawesome-all.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/slick/slick.css" />
        <link rel="stylesheet" type="text/css" href="/slick/slick-theme.css" />
        <link rel="stylesheet" href="/css/tooplate-style.css" />
      </head>
      <body>
        <Script id="css-vars-check" strategy="beforeInteractive">
          {`
            document.documentElement.className="js";
            var supportsCssVars=function(){
              var e,t=document.createElement("style");
              t.innerHTML="root: { --tmp-var: bold; }";
              document.head.appendChild(t);
              e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)"));
              t.parentNode.removeChild(t);
              return e;
            };
            if(!supportsCssVars()) {
              alert("Please view this in a modern browser such as latest version of Chrome or Microsoft Edge.");
            }
          `}
        </Script>
        {children}
        <Script
          src="/js/jquery-3.2.1.slim.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/slick/slick.min.js" strategy="beforeInteractive" />
        <Script src="/js/anime.min.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
