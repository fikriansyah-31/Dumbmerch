import React from 'react'
import "../assets/style/style.css";
import "../assets/style/complain.css";
import ChatList from '../components/Form Chat/ChatList';
import { Row, Col } from 'react-bootstrap';
import Chat from '../components/Form Chat/Chat';
import Navbar from '../components/Navbar';

const Complain = () => {
  return (
      <>
      <Navbar/>
    <div className="container-fluid">
      <Row>
        <Col className="col-4 border-end-chat d-md-block d-none">
          <ChatList />
        </Col>

        <Col className="col-md-8 col-12 d-flex align-items-end height-90">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 mb-3 d-flex align-items-end ">
                <div className="container-fluid container-chat overflow-auto ">
                  <Chat />
                </div>
              </div>
              <div className="col-12">
                <form action="#" className="">
                  <div className="input-group ">
                    <input type="text" placeholder="Send Message" aria-describedby="button-addon2" className="form-control rounded border-0 py-2 bg-var-dark-gray text-light mb-3" />
                  </div>
                </form>
                {/* </div> */}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    </>
  )
  }

export default Complain