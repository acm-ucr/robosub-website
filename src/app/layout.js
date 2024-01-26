import "./globals.css";
import NavBar from "@/components/NavBar";

// import Footer from "@/components/Footer";

export const metadata = {
  title: "UCR RoboSub",
  description: "UCR Underwater Robot Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-sans">
      <body className=" bg-robosub-black text-white w-screen overflow-x-hidden">
        <NavBar />
        {children}
      </body>
      {/* <Footer /> */}
    </html>
  );
}
