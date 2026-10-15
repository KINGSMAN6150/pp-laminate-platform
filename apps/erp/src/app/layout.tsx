import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';

export const metadata: Metadata = {
  title: 'Pawanputra ERP | Wholesale Management Platform',
  description: 'Internal wholesale operations dashboard for PP Laminate, Surat.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex bg-slate-50 antialiased text-slate-900">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 p-6 md:p-8 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
