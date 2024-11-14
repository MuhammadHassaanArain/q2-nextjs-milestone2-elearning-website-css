import "../styles/Testenomials.css";
export default function Testenomials() {
  return (
    <main
      style={{
        color: "#1a202c",
        background: "#f7fafc",
        paddingTop: "24px",
        paddingBottom: "80px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        {" "}
        <h2
          style={{
            fontSize: "1.875rem",
            color: "#2563eb",
            fontWeight: 700,
            paddingTop: "28px",
            paddingBottom: "28px",
          }}
        >
          Testenomials
        </h2>
      </div>

      <div className="custom-flex-lg">
        <section
          className="custom-style"
          style={{
            padding: "16px",
            background: "white",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <h3
            style={{
              color: "#2563eb",
              fontSize: "1.25rem",
              paddingTop: "8px",
              paddingBottom: "8px",
            }}
          >
            Sarim Sheikh
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet
            nobis eaque et vitae sequi similique molestiae quibusdam velit, sed
            porro debitis, Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aut amet nobis eaque et vitae sequi similique molestiae
            quibusdam velit, sed porro debitis,
          </p>
        </section>
        <section
          className="custom-style"
          style={{ padding: "16px", background: "white" }}
        >
          <h3
            style={{
              color: "#2563eb",
              fontSize: "1.25rem",
              paddingTop: "8px",
              paddingBottom: "8px",
            }}
          >
            Hassaan Arain
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet
            nobis eaque et vitae sequi similique molestiae quibusdam velit, sed
            porro debitis, illum facilis dolores harum necessitatibus ad
            reprehenderit neque? illum facilis dolores harum necessitatibus ad
            reprehenderit neque?
          </p>
        </section>
      </div>
    </main>
  );
}
