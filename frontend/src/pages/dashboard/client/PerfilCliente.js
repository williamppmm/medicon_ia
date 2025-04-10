import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Row, Col, Button, Alert, ListGroup } from 'react-bootstrap';
import { obtenerDatosCliente } from '../../../services/api';
import { Home, LogOut } from 'lucide-react';

const DetallesCliente = ({ cliente }) => (
  <ListGroup variant="flush">
    <ListGroup.Item style={{ backgroundColor: '#141414', color: 'white' }}>
      <strong>Nombre:</strong> {cliente.primer_nombre} {cliente.segundo_nombre} {cliente.primer_apellido} {cliente.segundo_apellido}
    </ListGroup.Item>
    <ListGroup.Item style={{ backgroundColor: '#141414', color: 'white' }}>
      <strong>Correo electrónico:</strong> {cliente.correo_electronico}
    </ListGroup.Item>
    <ListGroup.Item style={{ backgroundColor: '#141414', color: 'white' }}>
      <strong>Teléfono móvil:</strong> {cliente.telefono_movil}
    </ListGroup.Item>
    <ListGroup.Item style={{ backgroundColor: '#141414', color: 'white' }}>
      <strong>Dirección:</strong> {cliente.direccion}
    </ListGroup.Item>
    <ListGroup.Item style={{ backgroundColor: '#141414', color: 'white' }}>
      <strong>Municipio:</strong> {cliente.municipio}
    </ListGroup.Item>
    <ListGroup.Item style={{ backgroundColor: '#141414', color: 'white' }}>
      <strong>Fecha de nacimiento:</strong> {new Date(cliente.fecha_nacimiento).toLocaleDateString()}
    </ListGroup.Item>
    <ListGroup.Item style={{ backgroundColor: '#141414', color: 'white' }}>
      <strong>Nacionalidad:</strong> {cliente.nacionalidad}
    </ListGroup.Item>
    <ListGroup.Item style={{ backgroundColor: '#141414', color: 'white' }}>
      <strong>Tipo de documento:</strong> {cliente.tipo_documento}
    </ListGroup.Item>
    <ListGroup.Item style={{ backgroundColor: '#141414', color: 'white' }}>
      <strong>Número de documento:</strong> {cliente.numero_documento}
    </ListGroup.Item>
    <ListGroup.Item style={{ backgroundColor: '#141414', color: 'white' }}>
      <strong>Lugar de expedición:</strong> {cliente.lugar_expedicion}
    </ListGroup.Item>
    <ListGroup.Item style={{ backgroundColor: '#141414', color: 'white' }}>
      <strong>Fecha de expedición:</strong> {new Date(cliente.fecha_expedicion).toLocaleDateString()}
    </ListGroup.Item>
    <ListGroup.Item style={{ backgroundColor: '#141414', color: 'white' }}>
      <strong>Fecha de registro:</strong> {new Date(cliente.fecha_registro).toLocaleDateString()}
    </ListGroup.Item>
  </ListGroup>
);

const PerfilCliente = () => {
  const [clienteData, setClienteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClienteData = async () => {
      try {
        const data = await obtenerDatosCliente();
        setClienteData(data);
      } catch (err) {
        console.error('Error al obtener los datos del cliente:', err);
        setError('No se pudo obtener la información del cliente.');
        if (err.response?.status === 401) {
          navigate('/login-usuario', { replace: true });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchClienteData();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login-usuario');
  };

  if (loading) {
    return (
      <Container className="mt-5">
        <Alert variant="info">Cargando datos del perfil...</Alert>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', minHeight: '80vh', paddingTop: '80px', paddingBottom: '80px' }}>
      <Container style={{ maxWidth: '900px' }}>
        <Card className="shadow-lg text-light" style={{ backgroundColor: '#141414', borderRadius: '10px' }}>
          <Card.Body className="p-5">
            <h2 className="text-center mb-4">Tu información</h2>
            {clienteData && <DetallesCliente cliente={clienteData} />}
          </Card.Body>
        </Card>

        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <Card className="shadow-lg text-light" style={{ backgroundColor: '#141414', borderRadius: '10px' }}>
              <Card.Body className="p-3">
                <Card.Title>Modificación de Información No Sensible</Card.Title>
                <Card.Text>Actualiza tu teléfono, dirección y más.</Card.Text>
                <Button variant="primary px-4 py-2" onClick={() => navigate('/actualizar-datos')}>
                  Modificar Información
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="shadow-lg text-light" style={{ backgroundColor: '#141414', borderRadius: '10px' }}>
              <Card.Body className="p-3">
                <Card.Title>Cambio de Contraseña</Card.Title>
                <Card.Text>Actualiza tu contraseña de forma segura.</Card.Text>
                <Button variant="primary px-4 py-2" onClick={() => navigate('/cambiar-contrasena')}>
                  Cambiar Contraseña
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="shadow-lg text-light" style={{ backgroundColor: '#141414', borderRadius: '10px' }}>
              <Card.Body className="p-3">
                <Card.Title>Cambio de Correo Electrónico</Card.Title>
                <Card.Text>Actualiza tu correo electrónico.</Card.Text>
                <Button variant="primary px-4 py-2" onClick={() => navigate('/cambiar-correo')}>
                  Cambiar Correo Electrónico
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="shadow-lg text-light" style={{ backgroundColor: '#141414', borderRadius: '10px' }}>
              <Card.Body className="p-3">
                <Card.Title>Gestión de Cuenta</Card.Title>
                <Card.Text>
                  Suspende o elimina tu cuenta de forma permanente.
                </Card.Text>
                <div className="d-flex gap-3">
                  <Button
                    variant="warning px-4 py-2"
                    onClick={() => navigate('/suspender-cuenta')}
                  >
                    Suspender Cuenta
                  </Button>
                  <Button
                    variant="danger px-4 py-2"
                    onClick={() => navigate('/eliminar-cuenta')}
                  >
                    Eliminar Cuenta
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Botones adicionales */}
        <div className="mt-4 text-center">
          <Button
            variant="outline-primary"
            className="btn btn-outline-primary px-4 py-2 me-2"
            onClick={() => navigate('/dashboard-cliente')}
          >
            <Home size={18} className="me-2" /> Dashboard
          </Button>
          <Button
            variant="outline-danger"
            className="btn btn-outline-danger px-4 py-2"
            onClick={handleLogout}
          >
            <LogOut size={18} className="me-2" /> Cerrar Sesión
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default PerfilCliente;