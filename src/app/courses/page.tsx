import Image from "next/image";
import CourseWeb3 from "../../../public/images/Images/web3.0imageforwebiste.jpg";
import CourseAI from "../../../public/images/Images/aiimageeforwebsite.webp";
import CourseCC from "../../../public/images/Images/cloudcomputingimageforwebsite.jpg";
import "../courses/courses.css";
export default function Courses() {
  return (
    <div

      style={{
        background: "#f7fafc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          color: "#2563eb",
          fontSize: "1.875rem",
          fontWeight: 700,
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        Our Courses
      </h2>

      <main
        className="customGrid"
     
      >
        <section className="sectionCss"
        >
          <Image src={CourseWeb3} style={{maxWidth:"100%", height:"auto"}} alt="Courses" />
          <h3 className="sectionH3">Web 3.0</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
        <section className="sectionCss">
          <Image src={CourseAI}  style={{maxWidth:"100%", height:"auto"}} alt="Courses" />
          <h3 className="sectionH3">
            Artificial Intelligence
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
        <section className="sectionCss">
          <Image src={CourseCC}  style={{maxWidth:"100%", height:"auto"}} alt="Courses" />
          <h3 className="sectionH3">Cloud Computing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
        <section className="sectionCss">
          <Image src={CourseWeb3} style={{maxWidth:"100%", height:"auto"}} alt="Courses" />
          <h3 className="sectionH3">Web 3.0</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
        <section className="sectionCss">
          <Image src={CourseWeb3}  style={{maxWidth:"100%", height:"auto"}} alt="Courses" />
          <h3 className="sectionH3">Web 3.0</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
      </main>
    </div>
  );
}
