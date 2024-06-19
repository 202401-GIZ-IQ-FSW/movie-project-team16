import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/navbar";
import Footer from "./components/footer"; 

const aeonikPro = localFont({
  src: [
    {
      path: "../fonts/AeonikPro-Black.otf",
      weight: "600",
      style: "black",
    },
    {
      path: "../fonts/AeonikPro-Bold.otf",
      weight: "500",
      style: "bold",
    },
    {
      path: "../fonts/AeonikPro-Medium.otf",
      weight: "400",
      style: "medium",
    },
    {
      path: "../fonts/AeonikPro-Regular.otf",
      weight: "300",
      style: "regular",
    },
    {
      path: "../fonts/AeonikPro-Light.otf",
      weight: "200",
      style: "light",
    },
    {
      path: "../fonts/AeonikPro-Thin.otf",
      weight: "100",
      style: "thin",
    },
  ],
  variable: "--font-aeonik-pro",
});

const aeonikFono = localFont({
  src: [
    {
      path: "../fonts/AeonikFono-Black.otf",
      weight: "600",
      style: "black",
    },
    {
      path: "../fonts/AeonikFono-Bold.otf",
      weight: "500",
      style: "bold",
    },
    {
      path: "../fonts/AeonikFono-Medium.otf",
      weight: "400",
      style: "medium",
    },
    {
      path: "../fonts/AeonikFono-Regular.otf",
      weight: "300",
      style: "regular",
    },
    {
      path: "../fonts/AeonikFono-Light.otf",
      weight: "200",
      style: "light",
    },
  ],
  variable: "--font-aeonik-fono",
});
export const metadata = {
  title: "NotFlix",
  description: "Finds your next favorite movie",
  icons: {
    icon: "/images/N.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-black" lang="en">
      <body className={`${aeonikPro.variable} ${aeonikFono.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>

    </html>
  );
}
