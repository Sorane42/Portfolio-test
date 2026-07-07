import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Home2 from "./Home2";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import '@google/model-viewer';
import gundamModel from './gundam.glb';


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={12} className="text-center">
              <h1>
                <strong className='main-name'>SACHA DESQUESNES</strong>
                <br />
                <strong className='main-job'>Développeur web
                  <Typewriter
                    options={{
                      strings: [
                        " Full-Stack",
                        " Front-End",
                        " Back-End",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50
                    }}
                  />
                </strong>
              </h1>
              {/**
              <model-viewer 
                src={gundamModel}  // Chemin relatif vers votre fichier GLB
                alt="Strike Gundam 3D Model"
                auto-rotate 
                style={{ width: '100%', height: '500px' }}
              ></model-viewer>
              */}
              <br />
              <br />
              <div className="arrow-down">
                <FaRegArrowAltCircleDown />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
