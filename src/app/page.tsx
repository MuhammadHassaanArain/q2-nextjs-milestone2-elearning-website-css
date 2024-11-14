import Image from "next/image";
import HomeImage from "../../public/images/Images/homepageimageforlearnhub.jpg";
import Link from "next/link";
import "../styles/HomePage.css";
import TopCourses from "../components/TopCourses";
import OurStatus from "../components/ourStatus";
import Testenomials from "../components/Testinomials";
export default function Home() {
  return (
    <main>
      <section className="firstSection">
        <div className="customWidth  customSpacing  customFlexMd">
          <h1 style={{ fontSize: "1.5rem", color: "#2563eb" }}>
            Welcome to LearnHub – Your Gateway to Knowledge!
          </h1>
          <h3 style={{ fontSize: "1.25rem", color: "#1f2937" }}>
            Unlock Your Potential, Anytime, Anywhere
          </h3>
          <p>
            At LearnHub, we believe that learning should be accessible,
            engaging, and empowering. With a wide range of courses designed by
            experts, we make it easy for you to gain new skills and advance your
            career, all at your own pace.
          </p>
          <div
            className="customSpaceX4"
            style={{ paddingTop: "0.75rem", paddingBottom: "0.75rem" }}
          >
            <Link href={"/courses"}>
              {" "}
              <button className="customHoverBlue"
              style={{fontWeight:700,padding:"12px", color:"white"}}
              >
                Courses
              </button>
            </Link>
            <Link href={"/contact"}>
              {" "}
              <button className="customButton">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="customContainerbox">
          <Image
            src={HomeImage}
            alt="HomeImage"
            className="customWidth111"
          />
        </div>
      </section>
      <TopCourses/>
    <OurStatus/>
    <Testenomials/>
    </main>
  );
}
