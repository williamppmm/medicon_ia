// src/pages/home/Home.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import WhatsAppButton from '../../components/common/WhatsAppButton';
import './Home.css';

// Importa logo y agente IA
import logo from '../../assets/logos/logo.png';
import aiAgent from '../../assets/icons/ai-agent.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="home-page d-flex align-items-center justify-content-center">
      <Row className="text-center">
        <Col>
          {/* Título principal */}
          <h1 className="main-title mb-3">Medicon IA</h1>
          <p className="subtitle mb-5">Tu asistente de salud inteligente</p>

          {/* Logo principal */}
          <div className="logo-container mb-4">
            <img src={logo} alt="Medicon IA" className="logo-spin" />
          </div>

          {/* Botón para acceder al agente IA */}
          <Button
            className="btn-ai mb-4"
            size="lg"
            onClick={() => navigate('/consulta-ia')}
          >
            Consultar con Inteligencia Artificial
          </Button>

          {/* Icono del agente IA con animación */}
          <div className="ai-icon-container mb-5">
            <img src={aiAgent} alt="Agente IA" className="ai-icon" />
          </div>

          {/* Botones adicionales */}
          <div className="mb-4">
            <Button variant="outline-light" className="mx-2" size="lg" onClick={() => navigate('/registro-usuario')}>
              Registrarse
            </Button>
            <Button variant="outline-light" className="mx-2" size="lg" onClick={() => navigate('/login-usuario')}>
              Iniciar Sesión
            </Button>
          </div>

          <WhatsAppButton />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;