import Link from "next/link";
import "../Layouts/Layout.css";
function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "12px",
        background: "#f7fafc",
      }}
    >
      <div
        className="customContainer"
        style={{
          background: "#2563eb",
          color: "white",
          padding: "16px",
          textAlign: "center",
        }}
      >
        <Link href={"/"}>
          <h2 className="customTextHeading">LearnHub</h2>
        </Link>
        <nav style={{ fontWeight: 700 }}>
          <Link href="/" className="customHover">
            Home
          </Link>
          <Link href="/courses" className="customHover">
            Courses
          </Link>
          <Link href="/about" className="customHover">
            About
          </Link>
          <Link href="/contact" className="customHover">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
