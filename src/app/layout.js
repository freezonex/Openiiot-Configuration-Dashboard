export const metadata = {
  title: "Openiiot Configure Dashboard",
  description: "Openiiot Configure Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
