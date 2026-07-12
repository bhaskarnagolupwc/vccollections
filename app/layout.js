import "./globals.css";

export const metadata = {
  title: "VC Collections",
  description: "Thoughtful, livable interior design for homes and boutique commercial spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
