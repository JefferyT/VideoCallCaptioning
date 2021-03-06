import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import {Route, Switch, NavLink, Redirect} from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Video from './Video';
 
 
class App extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path="/" component={SignIn}/> 
          <Route path="/videoCall" component={MainPage}/>
          <Redirect to="/" />
        </Switch>
        
      </div>
    )
  }
}
 
class SignIn extends Component {
  handleClick = () => {
    return <Redirect to='/videoCall' />;
  }

  render() {
    return(
      <Jumbotron>
        <Container>
          <Row>
            <Col>Welcome!</Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Display Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your display name"
                  />
                  <Form.Text className="text-muted">
                    This is so others know who you are.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formRoomID">
                  <Form.Label>Room ID</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter the Room ID"
                  />
                </Form.Group>
                <Form.Text className="text-muted">
                  The creator of the room should've sent you their Room ID.{' '}
                  <br></br>
                </Form.Text>
                <br></br>
                <NavLink to="/videoCall" variant="primary">
                  Join
                </NavLink>
              </Form>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    )
  }
}

class MainPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="8"><Video /></Col>
            <Col>
              <Row>Transcription</Row>
              <Row><MessageList /></Row>
            </Col>
          </Row>
        </Container>
        <NavBar />
      </div>
    )
  }
}
 
class NavBar extends Component {
  render() {
    return(
      <Navbar bg="primary" className="fixed-bottom">
        <ButtonGroup className="audio-video">
          <Button variant="outline-light">Audio</Button>
          <Button variant="outline-light">Video</Button>
        </ButtonGroup>
 
        <ButtonGroup className="chat-transcription mx-auto">
          <Button variant="outline-light">Chat</Button>
          <Button variant="outline-light">Transcription</Button>
        </ButtonGroup>
 
        <ButtonGroup className="end-meeting">
          <Button variant="outline-light">End Meeting</Button>
        </ButtonGroup>
      </Navbar>
    )
  }
}
 
 
class Transcription extends Component {
  render() {
    return(
      <div>
        <h1></h1>
      </div>
 
    )
  }
}
 
class MessageList extends Component {
  render() {
    return (
      <Jumbotron fluid id="jumbo">
        <Container id="messageContainer">
          <Row id="row1">
            <Col id="col1">
              <Badge variant="primary">Hi Thomas!</Badge>{' '}
            </Col>
            <Col id="Col3"></Col>
          </Row>
          <Row>
            <Col id="Col3"></Col>
            <Col id="col1">
              <Badge variant="light">Hey, give me a second.</Badge>{' '}
            </Col>
          </Row>

          <br></br>
          <Form.Group controlId="formRoomID">
            <Form.Control type="text" placeholder="Enter your message" />
          </Form.Group>
        </Container>

        <Container></Container>
      </Jumbotron>
    );
  }
}
 
export default App;
 

