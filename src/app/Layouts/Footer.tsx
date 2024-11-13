import Link from "next/link";
function Footer() {
  return (
    <section
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <footer
        className="customSpaceY"
        style={{
          background: "#2563eb",
          color: "white",
          width: "100vw",
          paddingTop: "12px",
          paddingBottom: "12px",
        }}
      >
        <div className="customFlex">
          <h2 style={{ fontWeight: 700 }}>LearnHub</h2>
          <nav className="customSpace">
            <Link href="/" className="customTextHeading1">
              Home
            </Link>
            <Link href="/courses" className="customTextHeading1">
              Courses
            </Link>
            <Link href="/about" className="customTextHeading1">
              About Us
            </Link>
            <Link href="/contact" className="customTextHeading1">
              Contact Us
            </Link>
          </nav>
          <div className="customSpace">
            <a href="" className="customTextHeading1">
              LinkedIn
            </a>
            <a href="" className="customTextHeading1">
              GitHub
            </a>
            <a href="" className="customTextHeading1">
              Instagramm
            </a>
          </div>
        </div>
        <hr />
        <p> LearnHub &copy; 2024 All rights reserved</p>
      </footer>
    </section>
  );
}

export default Footer;
