import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

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

        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/dashboard.css" />

        <title>Home page</title>
      </head>

      <body>
        {/*Header Section*/}
        <Header />
        <main>{children}</main>
        <Footer />
        <script src="/main.js"></script>
        <script src="/routes/auth.js.js"></script>
      </body>
    </html>
  );
}
