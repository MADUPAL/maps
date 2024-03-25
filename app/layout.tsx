import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import SideNav from "./components/sidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* <body className={`${inter.className} antialiased bg-[#1E1F22]`}> */}
      <body className="bg-[#1E1F22]">
        <div className="flex flex-col md:flex-row h-screen md:overflow-hidden">
          <div className="w-full flex-none md:w-60">
            <SideNav />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
