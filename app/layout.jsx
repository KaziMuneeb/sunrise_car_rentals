import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Sunrise Car Rentals",
  description: "Start your amazing journey with us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-0">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
