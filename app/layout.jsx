import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        backgroundImage:
          "repeating-conic-gradient(#0000ff 0% 25%, #ffff00 0% 50%)",
        backgroundPosition: "0 0, 10px 10px",
        backgroundSize: "20px 20px",
        backgroundColor: "#ffff00",
      }}
    >
      <body
        className={inter.className}
        style={{ width: "100%", height: "100%" }}
      >
        {children}
      </body>
    </html>
  );
}
