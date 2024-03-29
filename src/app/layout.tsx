import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "@/styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/responsive.css"
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from '@/Components/NavBar'
import Header from '@/Components/Header'
import Header2 from '@/Components/Header2';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

    <Header2/>
       
        {children}</body>
    </html>
  )
}
