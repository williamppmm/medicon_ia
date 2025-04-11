//frontend/src/pages/home/Home.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import WhatsAppButton from '../../components/common/WhatsAppButton';
import './Home.css';

// Cambiaría el logo por uno médico
import logo from '../../assets/logos/medicon-logo.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="medicon-home text-center d-flex align-items-center justify-content-center">
      <Row>
        <Col>
          {/* Título médico */}
          <h1 className="mb-4">Medicon IA - Tu Asistente Médico Inteligente</h1>
          
          {/* Logo médico con animación de pulso (corazón) */}
          <div className="logo-container mb-4">
            <img 
              src={logo} 
              alt="Medicon IA" 
              className="logo-pulse"
            />
          </div>

          {/* Botones principales adaptados */}
          <div className="mb-4">
            <Button 
              onClick={() => navigate('/consulta-rapida')} 
              variant="primary" 
              size="lg" 
              className="mx-2"
            >
              Consulta Rápida
            </Button>
            <Button 
              onClick={() => navigate('/historial')} 
              variant="success" 
              size="lg" 
              className="mx-2"
            >
              Mi Historial
            </Button>
          </div>

          {/* WhatsApp adaptado para emergencias */}
          <div className="mb-4">
            <WhatsAppButton 
              message="Necesito asistencia médica urgente" 
              label="Emergencia Médica"
            />
          </div>

          {/* Sección de especialidades en lugar de promociones */}
          <h4 className="mb-3">Nuestras Especialidades</h4>
          <Link to="/especialidades" className="btn btn-outline-primary btn-lg mb-3">
            Ver Especialidades Médicas
          </Link>

          {/* Añadiría acceso rápido al chat médico */}
          <div className="mt-4">
            <Button 
              onClick={() => navigate('/chat-medico')} 
              variant="info" 
              size="lg"
            >
              Chat con Médico Virtual
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;