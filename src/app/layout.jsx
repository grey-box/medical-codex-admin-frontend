import localFont from "next/font/local";
import "../../public/styles/globals.css";
import { LanguageProvider } from '../i18n/LanguageContext';

export const metadata = {
  title: "Project Codex",
  description: "Medicine localization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <LanguageProvider>
        {children}
      </LanguageProvider>
      </body>
    </html>
  );
}
