import localFont from "next/font/local";
import "../../public/styles/globals.css";
import { LanguageProvider } from '../i18n/LanguageContext';

export const metadata = {
  title: "Project Codex",
  description: "Medicine localization",
};

/**
 * RootLayout is a React component that provides a top-level structure 
 * for the application, wrapping its children with the LanguageProvider 
 * context to manage language settings.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered 
 * within the layout.
 * @returns {React.ReactElement} - The rendered root layout.
 */
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
