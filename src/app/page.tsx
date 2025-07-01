"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Setup footer functionality
    const setupFooter = () => {
      const pageHeight =
        (document.querySelector(".tm-site-header-container") as HTMLElement)
          ?.offsetHeight +
        (document.querySelector("footer") as HTMLElement)?.offsetHeight +
        100;
      const main = document.querySelector(".tm-main-content") as HTMLElement;

      if (window.innerHeight < pageHeight) {
        main?.classList.add("tm-footer-relative");
      } else {
        main?.classList.remove("tm-footer-relative");
      }
    };

    setupFooter();
    window.addEventListener("resize", setupFooter);

    // Update year in copyright
    const yearElement = document.querySelector(".tm-current-year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }

    return () => {
      window.removeEventListener("resize", setupFooter);
    };
  }, []);

  return (
    <>
      <div id="tm-bg"></div>
      <div id="tm-wrap">
        <div className="tm-main-content">
          <div className="container tm-site-header-container">
            <div
              className="row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-md-0 mb-sm-4 mb-4 tm-site-header-col"
                style={{
                  minWidth: "320px",
                  flex: "1 1 320px",
                  maxWidth: "480px",
                }}
              >
                <div className="tm-site-header">
                  <h1 className="mb-4">Jared Sher</h1>
                  <img
                    src="/img/underline.png"
                    className="img-fluid mb-4"
                    alt="underline"
                    style={{ maxWidth: "180px" }}
                  />
                  <p>
                    Welcome to my portfolio. I am a software engineer with a
                    passion.
                  </p>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                style={{
                  minWidth: "320px",
                  flex: "1 1 320px",
                  maxWidth: "480px",
                }}
              >
                <div className="content">
                  <div className="grid">
                    <div className="grid__item" id="home-link">
                      <div className="product">
                        <div className="tm-nav-link">
                          <i className="fas fa-home fa-3x tm-nav-icon"></i>
                          <span className="tm-nav-text">Welcome</span>
                          <div className="product__bg"></div>
                        </div>
                        <div className="product__description">
                          <div className="row mb-3">
                            <div className="col-12">
                              <h2 className="tm-page-title">
                                Welcome to my Portfolio
                              </h2>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                              <img
                                src="/img/porfilepic.png"
                                className="img-fluid mb-3"
                                alt="welcome 1"
                                style={{ width: "400px", height: "400px" }}
                              />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                              <div className="description-content">
                                <p>
                                  Experienced Senior Full-Stack Engineer
                                  specializing in building and optimizing
                                  enterprise-grade web applications with a
                                  primary focus on Java and related
                                  technologies. Proficient in the full Java
                                  ecosystem including Spring Boot, Spring MVC,
                                  Hibernate, JPA, and J2EE. Skilled in modern
                                  front-end frameworks like Angular and
                                  React/React Native, with strong capabilities
                                  across back-end development using Java, as
                                  well as complementary experience in
                                  JavaScript, TypeScript, Python, C/C++, C#, Go,
                                  PHP, and Ruby. Extensive hands-on experience
                                  with databases, RESTful APIs, CI/CD pipelines,
                                  test automation, Docker, and Kubernetes. Adept
                                  with cloud platforms including AWS, GCP, and
                                  Microsoft Azure. Proven track record of
                                  leading cross-functional teams, driving
                                  software architecture, and applying modern
                                  development methodologies to deliver scalable,
                                  secure, and high-performance applications.
                                  Industry experience spans Healthcare
                                  (including HL7), Education, Finance,
                                  E-Commerce, ERP, and Entertainment.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid__item" id="team-link">
                      <div className="product">
                        <div className="tm-nav-link">
                          <i className="fas fa-users fa-3x tm-nav-icon"></i>
                          <span className="tm-nav-text">About Me</span>
                          <div className="product__bg"></div>
                        </div>
                        <div className="product__description">
                          <div className="p-sm-4 p-2">
                            <div className="row mb-3">
                              <div className="col-12">
                                <h2 className="tm-page-title">Experience</h2>
                              </div>
                            </div>
                            <div className="row tm-reverse-sm">
                              <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <div className="experience-timeline">
                                  {/* Job 1 - SAP */}
                                  <div className="job-card">
                                    <div className="job-header">
                                      <div className="job-title">
                                        <h3>Software Engineer</h3>
                                        <span className="company">SAP</span>
                                      </div>
                                      <div className="job-period">
                                        <span className="period">
                                          08/2024 – 06/2025
                                        </span>
                                        <span className="type">Germany</span>
                                      </div>
                                    </div>
                                    <div className="job-content">
                                      <div className="achievements">
                                        <h4>Key Achievements:</h4>
                                        <ul>
                                          <li>
                                            Achieved a 25% reduction in
                                            deployment times as measured by
                                            CI/CD pipeline efficiency, by
                                            integrating Jenkins, Docker, and
                                            Kubernetes with a Spring Boot–based
                                            deployment strategy.
                                          </li>
                                          <li>
                                            Ensured high availability and
                                            reliability of cloud-native
                                            applications by integrating AWS and
                                            GCP services (e.g., EC2, EKS, Cloud
                                            SQL), leveraging Infrastructure as
                                            Code tools like Terraform.
                                          </li>
                                          <li>
                                            Increased API performance by 30% as
                                            measured by response time
                                            benchmarks, by building optimized
                                            RESTful APIs using Java (Spring
                                            Boot) and applying asynchronous
                                            processing with Kafka.
                                          </li>
                                          <li>
                                            Designed and implemented a secure
                                            authentication and authorization
                                            system using Spring Security and
                                            OAuth2, integrated with React for a
                                            seamless front-end experience,
                                            ensuring full compliance with GDPR
                                            and HIPAA standards.
                                          </li>
                                          <li>
                                            Boosted user experience by 25% as
                                            measured by user satisfaction
                                            surveys, by refactoring the front
                                            end using Angular and Material
                                            Design principles integrated with
                                            backend services in Java.
                                          </li>
                                          <li>
                                            Improved system performance by 35%
                                            as measured by load tests, by
                                            integrating native C++ modules into
                                            Java services for computation-heavy
                                            processes within a microservices
                                            architecture.
                                          </li>
                                          <li>
                                            Led a cross-functional Agile team of
                                            8+ engineers to deliver full-stack
                                            features, improving sprint velocity
                                            by 30% and fostering continuous
                                            integration/deployment practices.
                                          </li>
                                          <li>
                                            Enhanced client retention by 30% as
                                            measured by customer satisfaction
                                            metrics, by architecting and
                                            maintaining Java-based CRM and ERP
                                            modules tailored for E-Commerce and
                                            Healthcare sectors (HL7/FHIR
                                            compliant).
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Job 2 - Revolut */}
                                  <div className="job-card">
                                    <div className="job-header">
                                      <div className="job-title">
                                        <h3>Software Engineer</h3>
                                        <span className="company">Revolut</span>
                                      </div>
                                      <div className="job-period">
                                        <span className="period">
                                          06/2022 – 07/2024
                                        </span>
                                        <span className="type">
                                          UK/Lithuania
                                        </span>
                                      </div>
                                    </div>
                                    <div className="job-content">
                                      <div className="achievements">
                                        <h4>Key Achievements:</h4>
                                        <ul>
                                          <li>
                                            Achieved a 25% reduction in data
                                            processing time as measured by
                                            system metrics by implementing HL7
                                            standards within Java-based EHR
                                            systems.
                                          </li>
                                          <li>
                                            Increased deployment frequency by
                                            35% through designing and
                                            maintaining robust CI/CD pipelines
                                            using Jenkins, Docker, and
                                            Kubernetes for Java microservices.
                                          </li>
                                          <li>
                                            Managed scalable and efficient IT
                                            infrastructure by leveraging Java
                                            Spring Boot services integrated with
                                            front-end frameworks like Angular
                                            and database systems such as
                                            PostgreSQL and MongoDB.
                                          </li>
                                          <li>
                                            Developed automated testing
                                            frameworks with JUnit and Mockito,
                                            reducing production bugs by 50% and
                                            increasing overall software
                                            reliability by 30%.
                                          </li>
                                          <li>
                                            Optimized database queries and
                                            caching strategies in PostgreSQL to
                                            reduce response times by 50% for
                                            critical API endpoints served by
                                            Spring Boot REST APIs.
                                          </li>
                                          <li>
                                            Built a real-time data visualization
                                            dashboard using Java WebSocket APIs,
                                            D3.js, and Spring MVC, enabling 30%
                                            faster decision-making for
                                            management.
                                          </li>
                                          <li>
                                            Collaborated closely with UI/UX
                                            teams to redesign front-end
                                            interfaces with Angular, resulting
                                            in a 25% increase in user
                                            satisfaction and seamless
                                            integration with Java back-end
                                            services.
                                          </li>
                                          <li>
                                            Automated data processing workflows
                                            by integrating AWS S3 and AWS Lambda
                                            with Java-based services, reducing
                                            manual intervention by 30%.
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Job 3 - Booking.com */}
                                  <div className="job-card">
                                    <div className="job-header">
                                      <div className="job-title">
                                        <h3>
                                          Software Development Engineer Intern
                                        </h3>
                                        <span className="company">
                                          Booking.com
                                        </span>
                                      </div>
                                      <div className="job-period">
                                        <span className="period">
                                          06/2021 – 05/2022
                                        </span>
                                        <span className="type">
                                          Netherlands
                                        </span>
                                      </div>
                                    </div>
                                    <div className="job-content">
                                      <div className="achievements">
                                        <h4>Key Achievements:</h4>
                                        <ul>
                                          <li>
                                            Improved supply chain efficiency by
                                            20% through integration of ERP
                                            systems for semiconductor
                                            manufacturing using Java-based
                                            middleware and APIs.
                                          </li>
                                          <li>
                                            Optimized digital signal processing
                                            algorithms with Java and C++,
                                            boosting performance by 20% across
                                            multiple operational environments.
                                          </li>
                                          <li>
                                            Enhanced data accuracy by 40% by
                                            implementing advanced power
                                            management algorithms in embedded
                                            systems using C++ and Java.
                                          </li>
                                          <li>
                                            Designed dynamic and responsive user
                                            interfaces using React.js and
                                            Bootstrap, increasing user
                                            engagement by 25%, integrated with
                                            Java backend services.
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Education */}
                                  <div className="job-card">
                                    <div className="job-header">
                                      <div className="job-title">
                                        <h3>
                                          Bachelor&apos;s Degree in Computer
                                          Science
                                        </h3>
                                        <span className="company">
                                          University of London
                                        </span>
                                      </div>
                                      <div className="job-period">
                                        <span className="period">
                                          04/2017 – 05/2021
                                        </span>
                                        <span className="type">London, UK</span>
                                      </div>
                                    </div>
                                    <div className="job-content">
                                      <div className="achievements">
                                        <p>
                                          Completed challenging courses covering
                                          algorithms, data structures, and
                                          programming languages.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid__item">
                      <div className="product">
                        <div className="tm-nav-link">
                          <i className="fas fa-handshake fa-3x tm-nav-icon"></i>
                          <span className="tm-nav-text">My Work</span>
                          <div className="product__bg"></div>
                        </div>
                        <div className="product__description">
                          <div className="p-sm-4 p-2">
                            <div className="row mb-3">
                              <div className="col-12">
                                <h2 className="tm-page-title">My Work</h2>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-12">
                                <p>
                                  Here are some of my recent projects showcasing
                                  my skills in web development, from full-stack
                                  applications to modern UI/UX designs. Each
                                  project demonstrates different technologies
                                  and approaches to solving real-world problems.
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className="portfolio-gallery">
                                  <div className="portfolio-grid">
                                    <div className="portfolio-item">
                                      <div className="portfolio-image">
                                        <img
                                          src="/img/gallery-img-01-tn.png"
                                          alt="Project 1"
                                          className="portfolio-img"
                                        />
                                        <div className="portfolio-overlay">
                                          <div className="portfolio-info">
                                            <h4>E-Commerce Platform</h4>
                                            <p>
                                              FramerCMS • PayloadCMS • MongoDB
                                            </p>
                                            <div className="portfolio-links">
                                              <a
                                                href="https://groceryheirlooms.com/"
                                                className="portfolio-link"
                                              >
                                                <i className="fas fa-external-link-alt"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="portfolio-item">
                                      <div className="portfolio-image">
                                        <img
                                          src="/img/gallery-img-02-tn.png"
                                          alt="Project 2"
                                          className="portfolio-img"
                                        />
                                        <div className="portfolio-overlay">
                                          <div className="portfolio-info">
                                            <h4>Task Management App</h4>
                                            <p>
                                              Next.js • Express • PostgreSQL
                                            </p>
                                            <div className="portfolio-links">
                                              <a
                                                href="https://xrosspoint.vercel.app/"
                                                className="portfolio-link"
                                              >
                                                <i className="fas fa-external-link-alt"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="portfolio-item">
                                      <div className="portfolio-image">
                                        <img
                                          src="/img/gallery-img-03-tn.png"
                                          alt="Project 3"
                                          className="portfolio-img"
                                        />
                                        <div className="portfolio-overlay">
                                          <div className="portfolio-info">
                                            <h4>Social Media Dashboard</h4>
                                            <p>Angular • GraphQL • Redis</p>
                                            <div className="portfolio-links">
                                              <a
                                                href="https://dentalbee.ai/"
                                                className="portfolio-link"
                                              >
                                                <i className="fas fa-external-link-alt"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="portfolio-item">
                                      <div className="portfolio-image">
                                        <img
                                          src="/img/gallery-img-04-tn.png"
                                          alt="Project 4"
                                          className="portfolio-img"
                                        />
                                        <div className="portfolio-overlay">
                                          <div className="portfolio-info">
                                            <h4>Real-time Chat App</h4>
                                            <p>Next.js • Socket.io • MongoDB</p>
                                            <div className="portfolio-links">
                                              <a
                                                href="https://freetalkzone.com/"
                                                className="portfolio-link"
                                              >
                                                <i className="fas fa-external-link-alt"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="portfolio-item">
                                      <div className="portfolio-image">
                                        <img
                                          src="/img/gallery-img-05-tn.png"
                                          alt="Project 4"
                                          className="portfolio-img"
                                        />
                                        <div className="portfolio-overlay">
                                          <div className="portfolio-info">
                                            <h4>Sport-Technology-Website</h4>
                                            <div className="portfolio-links">
                                              <a
                                                href="https://www.pythiasports.com/ "
                                                className="portfolio-link"
                                              >
                                                <i className="fas fa-external-link-alt"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="portfolio-item">
                                      <div className="portfolio-image">
                                        <img
                                          src="/img/gallery-img-06-tn.png"
                                          alt="Project 4"
                                          className="portfolio-img"
                                        />
                                        <div className="portfolio-overlay">
                                          <div className="portfolio-info">
                                            <h4> Plumbing Project Website</h4>
                                            <div className="portfolio-links">
                                              <a
                                                href="https://happyhiller.com/"
                                                className="portfolio-link"
                                              >
                                                <i className="fas fa-external-link-alt"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="portfolio-item">
                                      <div className="portfolio-image">
                                        <img
                                          src="/img/gallery-img-07-tn.png"
                                          alt="Project 4"
                                          className="portfolio-img"
                                        />
                                        <div className="portfolio-overlay">
                                          <div className="portfolio-info">
                                            <h4>
                                              Beauty & Cosmetic Website Rebuilt
                                              Project{" "}
                                            </h4>
                                            <div className="portfolio-links">
                                              <a
                                                href="https://luxurylashesuk.com/"
                                                className="portfolio-link"
                                              >
                                                <i className="fas fa-external-link-alt"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid__item">
                      <div className="product">
                        <div className="tm-nav-link">
                          <i className="fas fa-comments fa-3x tm-nav-icon"></i>
                          <span className="tm-nav-text">Contact</span>
                          <div className="product__bg"></div>
                        </div>
                        <div className="product__description">
                          <div className="pt-sm-4 pb-sm-4 pl-sm-5 pr-sm-5 pt-2 pb-2 pl-3 pr-3">
                            <div className="row mb-4">
                              <div className="col-12">
                                <h2 className="tm-page-title">Get In Touch</h2>
                                <p className="contact-intro">
                                  I&apos;m always open to discussing new
                                  opportunities, interesting projects, or just
                                  having a chat about technology. Feel free to
                                  reach out!
                                </p>
                              </div>
                            </div>

                            <div className="row">
                              {/* Contact Information */}
                              <div className="col-lg-4 col-md-12 mb-4">
                                <div className="contact-info">
                                  <h4 className="contact-section-title">
                                    Contact Information
                                  </h4>
                                  <div className="contact-item">
                                    <div className="contact-icon">
                                      <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="contact-details">
                                      <h5>Email</h5>
                                      <p> keepingthepaceshop@gmail.com</p>
                                    </div>
                                  </div>
                                  <div className="contact-item">
                                    <div className="contact-icon">
                                      <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="contact-details">
                                      <h5>Phone</h5>
                                      <p>+44 07541066177</p>
                                    </div>
                                  </div>
                                  <div className="contact-item">
                                    <div className="contact-icon">
                                      <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-details">
                                      <h5>Location</h5>
                                      <p>London, UK</p>
                                    </div>
                                  </div>
                                  <div className="contact-item">
                                    <div className="contact-icon">
                                      <i className="fab fa-linkedin"></i>
                                    </div>
                                    <div className="contact-details">
                                      <h5>LinkedIn</h5>
                                      <p>
                                        https://www.linkedin.com/in/jared-sher-6952a1347/
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <p className="small tm-copyright-text">
              Copyright &copy; <span className="tm-current-year">2022</span>{" "}
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
