import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { EditProvider } from "./components/EditContext";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Phiwakonke Mthethwa — Junior Full Stack Developer",
  description: "Junior Full Stack Developer based in Johannesburg, South Africa. Building purposeful software for Africa and beyond.",
  keywords: ["Full Stack Developer", "South Africa", "React", "Next.js", "Go", ".NET", "portfolio"],
  authors: [{ name: "Phiwakonke Mthethwa" }],
  openGraph: {
    title: "Phiwakonke Mthethwa — Junior Full Stack Developer",
    description: "Building purposeful software for Africa and beyond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <EditProvider>
            <Navbar />
            <main>{children}</main>
          </EditProvider>  
        </ThemeProvider>
      </body>
    </html>
  );
}