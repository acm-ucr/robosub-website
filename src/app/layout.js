/* eslint-disable new-cap */
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "UCR RoboSub",
  description: "UCR Underwater Robot Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-sans">
      <body className=" bg-robosub-black">
        <NavBar />
        <div className="mt-5 w-full flex flex-col min-h-screen overflow-hidden items-center mb-20 font-jost">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
