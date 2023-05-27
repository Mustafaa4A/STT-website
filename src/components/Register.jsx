import React from 'react'
import classnames from "classnames";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

const Register = ({focused}) => {
  return (
    <div className="modal-body p-0">
      <Card className="bg-secondary shadow border-0">
        <CardHeader>
          <h2 className='text-uppercase text-center' >Sign up</h2>
        </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            {/* <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div> */}
          <Form role="form">
            <FormGroup
                className={classnames("mb-3", {
                  focused: focused
                })}
              >
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Full Name"
                    type="text"
                    // onFocus={(e) =>
                    //   this.setState({ emailFocused: true })
                    // }
                    // onBlur={(e) =>
                    //   this.setState({ emailFocused: false })
                    // }
                  />
                </InputGroup>
            </FormGroup>
            
              <FormGroup
                className={classnames("mb-3", {
                  focused: focused
                })}
              >
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    // onFocus={(e) =>
                    //   this.setState({ emailFocused: true })
                    // }
                    // onBlur={(e) =>
                    //   this.setState({ emailFocused: false })
                    // }
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup
                className={classnames({
                  focused: focused
                })}
              >
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="off"
                    // onFocus={(e) =>
                    //   this.setState({ passwordFocused: true })
                    // }
                    // onBlur={(e) =>
                    //   this.setState({ passwordFocused: false })
                    // }
                  />
                </InputGroup>
            </FormGroup>
            <FormGroup
                className={classnames({
                  focused: focused
                })}
              >
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="off"
                    // onFocus={(e) =>
                    //   this.setState({ passwordFocused: true })
                    // }
                    // onBlur={(e) =>
                    //   this.setState({ passwordFocused: false })
                    // }
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button">
                  Sign UP
                </Button>
              </div>
            </Form>
          </CardBody>
      </Card>
    </div>
  )
}

export default Register