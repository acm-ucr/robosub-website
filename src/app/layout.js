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
      <body className=" bg-robosub-black text-white relative w-screen overflow-x-hidden">
        <NavBar />
        <div className="flex w-full flex-col min-h-screen items-center mb-20 font-sans">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
