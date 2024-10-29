import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { Provider } from "@/components/provider";
import { Layout } from "@/components/template/Layout";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "MERN | Naresh Rajbanshi",
  description: "Naresh Rajbanshi - MERN Stack Developer specializing in creating innovative web solutions.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <Provider>
          <Layout>
            {children}
            <Analytics />
          </Layout>
        </Provider>
      </body>
    </html>
  );
}
