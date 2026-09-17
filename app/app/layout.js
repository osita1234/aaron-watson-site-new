export const metadata = {
  title: "AARON WATSON",
  description: "Official website of Aaron Watson — Musician and Comedian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
