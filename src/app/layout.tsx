import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
const nunito = Nunito({
  weight: ["400", "500", "700"], 
  subsets: ["latin"], 
});


export const metadata: Metadata = {
  title: "WattWise",
  description: "Sistema inteligente de monitoramento e gestão de consumo energético para residências e empresas. Obtenha dados em tempo real, sugestões personalizadas e integração com fontes de energia renovável para promover economia e sustentabilidade.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body
        className={`${nunito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
