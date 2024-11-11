import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Aquaculture Fish Farms Management",
      description: "An innovative project aimed at automating fish feeding in aquaculture farms using machine learning. The project utilizes webcams for fish tracking and weight detection, coupled with an AI algorithm to ensure the right amount of feed is provided to the fish. This has led to improved fish health and reduced manual labor for farmers.",
      imgUrl: projImg1,
    },
    {
      title: "AI Trip Planner",
      description: "Designed an AI-powered trip planning app that offers personalized recommendations based on user preferences such as destination, budget, and companions. The app generates day-wise itineraries and hotel suggestions, making it a one-stop solution for all travel-related needs. The app uses Firebase for real-time data synchronization.",
      imgUrl: projImg2,
    },
    {
      title: "Similar Document Template Matching",
      description: "A tool designed to help users match similar document templates using a customized matching algorithm. The project focused on optimizing the search functionality for a large database of documents, reducing response times and improving accuracy.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center mb-5">Projects</h2>
                  <p className="text-center text-muted mb-5">Explore my major projects, the challenges I faced, and the innovative solutions I implemented. Here are the highlights:</p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard key={index} {...project} />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="project-highlights">
                          <h3 className="text-center mb-4">Project Highlights & Challenges</h3>
                          <h5 className="mb-3">Major Projects in Detail</h5>
                          <div className="mb-4">
                            <ul>
                              <li>
                                <strong>Aquaculture Fish Farms Management</strong><br />
                                An innovative project aimed at automating fish feeding in aquaculture farms using machine learning. The project utilizes webcams for fish tracking and weight detection, coupled with an AI algorithm to ensure the right amount of feed is provided to the fish. This has led to improved fish health and reduced manual labor for farmers.
                              </li>
                              <li>
                                <strong>AI Trip Planner</strong><br />
                                Designed an AI-powered trip planning app that offers personalized recommendations based on user preferences such as destination, budget, and companions. The app generates day-wise itineraries and hotel suggestions, making it a one-stop solution for all travel-related needs. The app uses Firebase for real-time data synchronization.
                              </li>
                              <li>
                                <strong>Similar Document Template Matching</strong><br />
                                A tool designed to help users match similar document templates using a customized matching algorithm. The project focused on optimizing the search functionality for a large database of documents, reducing response times and improving accuracy.
                              </li>
                            </ul>
                          </div>
                          <h5 className="mb-3">Challenges Overcome</h5>
                          <div className="mb-4">
                            <ul>
                              <li>
                                <strong>Scalability in the AI Trip Planner</strong><br />
                                One of the biggest challenges faced during the AI Trip Planner's development was ensuring the app could handle multiple users and offer real-time, personalized recommendations without latency. The solution was to implement Firebase for its real-time database capabilities, ensuring scalability.
                              </li>
                              <li>
                                <strong>Accuracy in Fish Feeding Algorithm</strong><br />
                                While developing the automated fish feeding system, a major challenge was ensuring accurate weight detection using machine learning. After several iterations of model training and data collection, the algorithm now delivers optimal feeding amounts based on individual fish size and weight.
                              </li>
                            </ul>
                          </div>
                          {/* <h5 className="mb-3">Solutions & Innovations</h5>
                          <div className="mb-4">
                            <ul>
                              <li>
                                <strong>Innovative UI/UX Design</strong><br />
                                For the Rakshak app, the challenge was to design an interface that was both simple and intuitive while also incorporating critical emergency features. The app design went through user feedback cycles to improve usability, especially under stress.
                              </li>
                              <li>
                                <strong>Optimization of Algorithms</strong><br />
                                In the Similar Document Template Matching project, algorithm optimization was key to improve speed. By refining search algorithms and utilizing efficient data structures, we managed to reduce the average processing time by 30%.
                              </li>
                            </ul>
                          </div> */}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}
