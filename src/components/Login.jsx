import { login } from 'api/user';
import { UserContext } from 'context/user';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import githubIcon from 'assets/img/icons/common/github.svg'
import googleIcon from 'assets/img/icons/common/google.svg'
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

const Login = () => {
  const navigate = useNavigate()
  const {saveUser} =useContext(UserContext)
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

     if (!email || !password ) {
         toast.error("Fill the required fields");
         return;
    }
    
    const user = { username:email, password }
  
    login(user)
      .then(response => {
        saveUser(response.data);
          navigate("/", { replace: true });
          window.location.reload();
      })
    .catch(error => {
      toast.error(error.message);
    });

  }

  return (
    <div className="modal-body p-0">
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-white pb-5">
          <div className="text-muted text-center mb-3">
            <small>Sign in with</small>
          </div>
          <div className="btn-wrapper text-center">
            <Button
              className="btn-icon mt-2 mb-2"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <span className="btn-inner--icon mr-1">
                <img
                  alt="..."
                  src={githubIcon}
                />
              </span>
              <span className="btn-inner--text">Github</span>
            </Button>
            <Button
              className="btn-icon mt-2 mb-2 ml-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <span className="btn-inner--icon mr-1">
                <img
                  alt="..."
                  src={googleIcon}
                />
              </span>
              <span className="btn-inner--text">Google</span>
            </Button>
          </div>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Or sign in with credentials</small>
          </div>
          <Form role="form" onSubmit={onSubmit}>
            <FormGroup
            >
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email or Username"
                  type="email"
                  name="email"
                />
              </InputGroup>
            </FormGroup>
            <FormGroup
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
                  name="password"
                />
              </InputGroup>
            </FormGroup>
            <div className="custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id=" customCheckLogin"
                type="checkbox"
              />
              <label
                className="custom-control-label"
                htmlFor=" customCheckLogin"
              >
                <span className="text-muted">Remember me</span>
              </label>
            </div>
            <div className="text-center">
              <Button className="my-4" color="primary" type="submit">
                Sign in
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default Login