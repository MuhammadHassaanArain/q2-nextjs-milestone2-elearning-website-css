
import "../styles/OurStatus.css";
export default function OurStatus() {
  return (
    <div className="customFlex1111"
    style={{paddingTop:"40px", paddingBottom:"40px", background:"#f7fafc"}}
    >
      <main className="custom-flex"
      style={{textAlign:"center", background:"#f7fafc"}}
      
      >


        <section style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <h2 style={{ color: "#2563eb", fontSize: "4.5rem" }}>10K+</h2>
          <p style={{ color: "#1a202c", fontSize: " 1.875rem" }}>Students</p>
        </section>
        <section style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <h2 style={{ color: "#2563eb", fontSize: "4.5rem" }}>100+</h2>
          <p style={{ color: "#1a202c", fontSize: " 1.875rem" }}>
            Skills Lectures
          </p>
        </section>
        <section style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <h2 style={{ color: "#2563eb", fontSize: "4.5rem" }}>100k+</h2>
          <p style={{ color: "#1a202c", fontSize: " 1.875rem" }}>Watch Hours</p>
        </section>
      </main>
    </div>
  );
}
