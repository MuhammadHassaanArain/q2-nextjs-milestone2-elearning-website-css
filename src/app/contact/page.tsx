import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import "../contact/contact.css";

export default function Contact() {
  return (
    <div
      style={{
        background: "#f7fafc",
        display: "flex",
        justifyContent: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <main style={{ width: "83.33%" }}>
        <section>
          <h2
            style={{
              color: "#2563eb",
              fontWeight: 700,
              textAlign: "center",
              padding: "24px",
              fontSize: "24px",
            }}
          >
            Contact Details
          </h2>
        </section>
        <div className="customClass123">
          <section
            className="customClass11"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <form
            className="custombox1"
              style={{
                display: "flex",
                flexDirection: "column",
                background:"#ffffff",
                padding: "16px",
                width: "83.33%",
                borderRadius: "0.375rem",
              
              }}
            >
              <label
                style={{ color: "#1a202c", fontWeight: 700, paddingTop: "8px" }}
              >
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="customClass3"
              />
              <label
                style={{
                  color: "#1a202c",
                  fontWeight: 700,
                  paddingTop: "12px",
                }}
              >
                Email :
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="customClass3"
              />
              <label
                style={{
                  color: "##1a202c",
                  fontWeight: 700,
                  paddingTop: "12px",
                }}
              >
                Message:
              </label>
              <textarea
                rows={3}
                placeholder="Type Your Message here!"
                className="customClass3"
              ></textarea>
              <button className="customClass22">Submit</button>
            </form>
          </section>

          <section style={{ paddingTop: "40ox", paddingBottom: "40px" }}>
            <div style={{ display: "flex", margin: "1rem" }}>
              <FaPhoneAlt
                style={{
                  width: "64px",
                  borderRadius: "0.375rem",
                  height: "48px",
                  background: "#2563eb; ",
                  padding: "8px",
                  marginRight: "16px",
                  marginLeft: "16px",
                }}
              />
              <p style={{ display: "flex", color:"#1a202c",flexDirection: "column" }}>
                <span
                  style={{
                    color: "#2563eb; ",
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  Phone No
                </span>
                03273789477
              </p>
            </div>
            <div style={{ display: "flex", margin: "1rem" }}>
              <HiOutlineMailOpen
                style={{
                  width: "64px",
                  borderRadius: "0.375rem",
                  height: "48px",
                  background: "#2563eb; ",
                  padding: "8px",
                  marginRight: "16px",
                  marginLeft: "16px",
                }}
              />
              <p style={{ display: "flex", flexDirection: "column", color:"#1a202c" }}>
                <span
                  style={{
                    color: "#2563eb; ",
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  Email{" "}
                </span>
                username@gmail.com
              </p>
            </div>

            <div style={{ display: "flex", margin: "1rem" }}>
              <FaLocationDot
                style={{
                  width: "64px",
                  borderRadius: "0.375rem",
                  height: "48px",
                  background: "#2563eb; ",
                  padding: "8px",
                  marginRight: "16px",
                  marginLeft: "16px",
                }}
              />
              <p style={{ display: "flex", flexDirection: "column", color:"#1a202c" }}>
                <span
                  style={{
                    color: "#2563eb; ",
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  Location
                </span>
                Hyderabad Sindh, Pakistan{" "}
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
