import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Layout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script src="https://cdn.tailwindcss.com"></script>
        {/*Font awesome */}
        <script
          src="https://kit.fontawesome.com/bc79913c77.js"
          crossOrigin="anonymous"
        ></script>

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />

        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/dashboard.css" />

        <title>Dog Central</title>
      </head>

      <body>
        {/*Header Section*/}
        <Header />
        <main>{children}</main>
        <Footer />
        <script src="/main.js"></script>
        <script src="/routes/auth.js"></script>
      </body>
    </html>
  );
}
