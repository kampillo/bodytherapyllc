import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Body Therapy LLC',
  description: 'Contáctanos para consultas, reservas o cualquier pregunta sobre nuestros servicios de terapia.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 