import StickyFooter from "../Footer/StickyFooter";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <StickyFooter />
    </div>
  );
}
