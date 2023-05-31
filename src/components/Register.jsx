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
import { useForm } from "react-hook-form";

const Register = () => {
  const {  register, handleSubmit, formState: { errors }} = useForm();

  
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="modal-body p-0">
      <Card className="bg-secondary shadow border-0">
        <CardHeader>
          <h2 className='text-uppercase text-center' >Sign up</h2>
        </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
          <Form method="POST" onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("fullname")}
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
                    {...register("email")}
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
                    {...register("password")}
                  
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
                    {...register("confirm")}
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