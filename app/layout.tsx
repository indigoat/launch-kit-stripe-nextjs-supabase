'use client';

import { Geist } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/contexts/AuthContext';
import TopBar from '../components/TopBar';
import ProtectedRoute from '@/contexts/ProtectedRoute';
// import { WebSocketProvider } from "@/contexts/WebSocketContext";
import { Analytics } from "@vercel/analytics/react"
// import { PostHogProvider } from '@/contexts/PostHogContext';
// import { PostHogErrorBoundary } from '@/components/PostHogErrorBoundary';

const geist = Geist({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Analytics mode="auto" />
        {/* <PostHogErrorBoundary>
          <PostHogProvider> */}
            <AuthProvider>   
              {/* <WebSocketProvider> */}
                <ProtectedRoute>
                  <TopBar />    
                  <main>{children}</main>
                </ProtectedRoute>
              {/* </WebSocketProvider> */}
            </AuthProvider>
          {/* </PostHogProvider>
        </PostHogErrorBoundary> */}
      </body>
    </html>
  );
}
