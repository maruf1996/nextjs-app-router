import "./globals.css";

export const metadata = {
  title: "Nextjs App Router",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen text-2xl">{children}</div>
      </body>
    </html>
  );
}
