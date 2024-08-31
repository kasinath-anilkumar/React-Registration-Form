import React, { useState } from 'react';
import { Form, InputGroup, Row, Col, Button } from 'react-bootstrap';
import './Form.css';

const RegistrationForm = () => {
  const initialFormState = {
    firstName: '',
    lastName: '',
    address: '',
    mobileNumber: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.mobileNumber.match(/^\d{10}$/)) newErrors.mobileNumber = 'Mobile number must be 10 digits';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email format';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.course) newErrors.course = 'Course selection is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setValidated(true);

      alert(`Form Data:
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Address: ${formData.address}
      Mobile Number: ${formData.mobileNumber}
      Email: ${formData.email}
      Gender: ${formData.gender}
      Date of Birth: ${formData.dob}
      Course: ${formData.course}`);
      
      alert("Form Submitted Sucessfully.....")
      setFormData(initialFormState);

    } else {
      setValidated(false);
      setErrors(newErrors);
    }
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setValidated(false);
    setErrors({});
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <Row className="justify-content-center">
          <Col md={8} lg={12}>
            <Form noValidate onSubmit={handleSubmit}>
              <table className="table shadow">
                <thead>
                  <tr>
                    <th className="text-center" style={{ fontSize: '1.8rem' }}>
                      Student Registration Form
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>First and Last Name</InputGroup.Text>
                        <Form.Control
                          name="firstName"
                          placeholder="First name"
                          aria-label="First name"
                          value={formData.firstName}
                          onChange={handleChange}
                          isInvalid={!!errors.firstName}
                        />
                        <Form.Control
                          name="lastName"
                          placeholder="Last name"
                          aria-label="Last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.firstName || errors.lastName}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InputGroup>
                        <InputGroup.Text>Address</InputGroup.Text>
                        <Form.Control
                          as="textarea"
                          name="address"
                          aria-label="Address"
                          placeholder="Enter your address"
                          value={formData.address}
                          onChange={handleChange}
                          isInvalid={!!errors.address}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.address}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Row>
                        <Col>
                          <InputGroup className="mb-3">
                            <InputGroup.Text>Mobile Number</InputGroup.Text>
                            <Form.Control
                              name="mobileNumber"
                              placeholder="Enter your mobile number"
                              aria-label="Mobile number"
                              value={formData.mobileNumber}
                              onChange={handleChange}
                              isInvalid={!!errors.mobileNumber}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.mobileNumber}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Col>
                        <Col>
                          <InputGroup className="mb-3">
                            <Form.Control
                              name="email"
                              placeholder="Email address"
                              aria-label="Email address"
                              value={formData.email}
                              onChange={handleChange}
                              isInvalid={!!errors.email}
                            />
                            <InputGroup.Text>@example.com</InputGroup.Text>
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex justify-content-around align-items-center mb-3">
                        <span className="fw-bolder" style={{ fontSize: '20px' }}>Gender</span>
                        <span className="fw-bolder" style={{ fontSize: '20px' }}>Date Of Birth</span>
                      </div>
                      <Row>
                        <Col className="mt-3 text-center">
                          <Form.Check
                            inline
                            type="radio"
                            label="Male"
                            name="gender"
                            value="Male"
                            onChange={handleChange}
                            isInvalid={!!errors.gender}
                            checked={formData.gender === 'Male'}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="Female"
                            name="gender"
                            value="Female"
                            onChange={handleChange}
                            isInvalid={!!errors.gender}
                            checked={formData.gender === 'Female'}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="Other"
                            name="gender"
                            value="Other"
                            onChange={handleChange}
                            isInvalid={!!errors.gender}
                            checked={formData.gender === 'Other'}
                          />
                          <Form.Control.Feedback type="invalid" className="text-center">
                            {errors.gender}
                          </Form.Control.Feedback>
                        </Col>
                        <Col>
                          <Form.Control
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            isInvalid={!!errors.dob}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.dob}
                          </Form.Control.Feedback>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="course">
                        <h4 className="m-2">Course</h4>
                      </div>
                      <Form.Select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        isInvalid={!!errors.course}
                      >
                        <option value="">Select a course</option>
                        <option>Biology</option>
                        <option>Commerce</option>
                        <option>Computer Science</option>
                        <option>Humanities</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.course}
                      </Form.Control.Feedback>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex justify-content-end mt-3">
                        <Button className="me-5 bg-danger" type="button" onClick={handleCancel}>
                          Cancel
                        </Button>
                        <Button type="submit" className="bg-success">
                          Submit form
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RegistrationForm;
