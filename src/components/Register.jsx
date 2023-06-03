import React, { useState } from 'react';
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
import { register } from 'api/user';
import { toast } from 'react-toastify';

const Register = () => {

  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirm = formData.get("confirm");

     if (!fullname || !email || !password || !email || !confirm) {
         toast.error("Fill the required fields");
         return;
      }

      if (password !== confirm) {
         toast.error("Password Does Not Match");
         return;
      }
    const user = { name:fullname, username:email, password }
  
    register(user)
      .then(response => {
      toast.success("Login")
    })
    .catch(error => {
      toast.error(error.message);
    });

  }



  return (
    <div className="modal-body p-0">
      <Card className="bg-secondary shadow border-0">
        <CardHeader>
          <h2 className='text-uppercase text-center' >Sign up</h2>
        </CardHeader>
          <CardBody className="px-lg-5 ">
          <Form method="POST" onSubmit={onSubmit}>
            <FormGroup >
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Full Name"
                    type="text"
                    name="fullname"
                  />
                </InputGroup>
            </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
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
            <FormGroup>
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
                    name="confirm"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
              <Button className="my-4" color="primary" type="submit">
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