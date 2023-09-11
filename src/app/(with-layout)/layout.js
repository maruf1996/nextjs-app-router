import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen text-2xl">{children}</div>
      <Footer></Footer>
    </>
  );
}
