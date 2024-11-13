import "../about/about.css";
export default function AboutUs() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
        background: "#f7fafc",
      }}
    >
      <h2
        style={{
          color: "#2563eb",
          fontSize: "1.875rem",
          fontWeight: 700,
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        About LearnHub
      </h2>
      <main className="customElement1">
        <section>
          <p>
            Welcome to Learn Hub—your trusted platform for high-quality,
            flexible, and impactful online education. At Learn Hub, we believe
            that education is the cornerstone of personal and professional
            growth. Our mission is to make learning accessible to everyone,
            regardless of location, background, or previous experience, and to
            provide you with the skills needed to thrive in today&apos;s rapidly
            changing world.
          </p>
        </section>
        <section>
          <h3
            style={{
              color: "#2563eb",
              fontSize: "1.25rem",
              paddingTop: "16px",
            }}
          >
            Our Story
          </h3>
          <p>
            Learn Hub was founded with a simple but powerful vision: to
            democratize learning by creating a platform where anyone, anywhere,
            can access top-tier educational content. We started with a handful
            of courses, but over time, we&apos;ve expanded to include a diverse
            range of subjects and specializations. Today, our platform is home
            to hundreds of expertly designed courses across fields such as
            technology, business, creative arts, personal development, and more.
            <br />
            <br />
            With acommitment to quality and continuous improvement, we strive to
            make Learn Hub a place where learners can transform their passions
            into skills, and their skills into careers.
          </p>
        </section>
        <section>
          <h3
            style={{
              color: "#2563eb",
              fontSize: "1.25rem",
              paddingTop: "16px",
            }}
          >
            Our Values
          </h3>
          <p>
            {" "}
            <span style={{ color: "#2563eb" }}>Accessibility:</span> We believe
            everyone deserves the chance to learn, which is why we offer courses
            that are affordable and accessible to a global audience.
          </p>
          <p>
            <span style={{ color: "#2563eb" }}>Quality:</span>Every course on
            Learn Hub is created by industry professionals and vetted to ensure
            high educational standards.
          </p>
          <p>
            <span style={{ color: "#2563eb" }}>Flexibility:</span>We understand
            that life is busy. Our courses are designed to fit into your
            schedule, allowing you to learn at your own pace.
          </p>
          <p>
            <span style={{ color: "#2563eb" }}>Community</span> Learning is more
            effective when shared. Our platform fosters a supportive community
            of learners and instructors who inspire and help one another
            succeed.
          </p>
        </section>
        <section>
          <h3
            style={{
              color: "#2563eb",
              fontSize: "1.25rem",
              paddingTop: "16px",
            }}
          >
            Our Vision
          </h3>
          <p>
            At Learn Hub, our vision is to create a world where learning is
            continuous, accessible, and enjoyable. We want to empower people
            everywhere to reach their full potential and achieve their dreams.
            By offering quality, accessible education, we believe we can make a
            meaningful impact in people&apos;s lives, enabling them to adapt to
            new challenges and opportunities.
          </p>
        </section>
        <section>
          <h3
            style={{
              color: "#2563eb",
              fontSize: "1.25rem",
              paddingTop: "16px",
            }}
          >
            Join Us on Your Learning Journey
          </h3>
          <p>
            Are you ready to take the next step in your education? Join the
            Learn Hub community today and unlock your potential. Whether
            you&apos;re starting a new career, upskilling, or simply following
            your curiosity, we&apos;re here to help you succeed. Let&apos;s
            grow, learn, and achieve together—one course at a time.
          </p>
        </section>
        <br />
        <br />
        <br />
        <h2
          style={{ color: "#2563eb", fontSize: "1.25rem", paddingTop: "16px" }}
        >
          Start your journey with Learn Hub, where learning meets opportunity!
        </h2>
      </main>
    </div>
  );
}
