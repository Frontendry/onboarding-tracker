// External Imports
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col } from "react-bootstrap";

// Local Imports
import AllTasks from "./components/Tasks/AllTasks";
import Title from "./components/Title/Title";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="bg-light mx-auto py-4" md={9}>
            <Title />
            <section className="px-5">
              <Container fluid>
                <Row>
                  <Col md={6}>
                    <UsersList />
                  </Col>
                  <Col md={6}>
                    <AllTasks />
                  </Col>
                </Row>
              </Container>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
