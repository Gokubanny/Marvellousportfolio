import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CosmicAnalyticsProvider } from "cosmic-analytics";
import Navbar from "@/app/components/Navbar";

const primaryFont = Geist({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"]
});

// Change the title and description to your own.
export const metadata: Metadata = {
  title: "Omatule Marvellous - Full-Stack Developer",
  description: "Premium 3D animated portfolio showcasing full-stack development skills, projects, and experience in modern web technologies."
};

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html data-editor-id="app/layout.tsx:27:5" lang="en" className={primaryFont.className}>
      <body data-editor-id="app/layout.tsx:31:7" className="antialiased bg-black overflow-x-hidden">
        <Navbar />
        <main data-editor-id="app/layout.tsx:32:9" className="relative">
          <CosmicAnalyticsProvider>
            {children}
          </CosmicAnalyticsProvider>
        </main>
        {process.env.VISUAL_EDITOR_ACTIVE === 'true' &&
        <script data-editor-id="app/layout.tsx:50:9" src="/editor.js" async />
        }
      </body>
    </html>);

}