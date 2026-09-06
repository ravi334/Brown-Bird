import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Brown Bird Solar Distributor',
  description: 'Authorized distributor of UTL solar panels, batteries, and inverters across Karnataka. Serving Hubli, Belgaum, and more.',
  keywords: 'solar panels, batteries, inverters, UTL, distributor, Karnataka',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}