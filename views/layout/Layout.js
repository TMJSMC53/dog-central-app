import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Homepage({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script src="https://cdn.tailwindcss.com"></script>

        <link rel="stylesheet" href="/css/style.css" />

        <title>Home page</title>
      </head>

      <body>
        {/*Header Section*/}
        <Header />
        <main>{children}</main>
        <Footer />
        <script src="main.js"></script>
      </body>
    </html>
  );
}
