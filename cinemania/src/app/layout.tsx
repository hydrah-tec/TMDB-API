import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
  title: 'Cinemania | Hydrah tec',
  description: 'acervo com os melhores filmes já lançados!',
  keywords:
    'filmes online, melhores filmes, filmes em cartaz, filmes de ação, filmes de aventura',
  icons: '/img/favicon.svg',
  robots: 'index, follow',
  authors: [{ name: 'Eliel pereira', url: 'https://github.com/hydrahtec' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <NavBar />
        <Suspense fallback={<div>Carregando...</div>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
