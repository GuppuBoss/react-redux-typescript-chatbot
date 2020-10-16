import React from 'react';
import { 
  Col,
  Form,
  Button,
  InputGroup,
  Container,
  Row
} from 'react-bootstrap';
import { Formik } from 'formik';
import {
    useDispatch,
    useSelector
  } from "react-redux"
import { IChatUsers } from '../../interfaces';
import { ChatUsersSchema } from '../../validators';
import {setChatUsersAction} from '../../redux/actions';

export const ChatForm = () => {
  const Disptach = useDispatch();
  const { users } = useSelector(({usersChat}: any) => ({
    users: usersChat.users
  }));

  return (
      <Row className="justify-content-md-center">
        <Col sm={4}>
          { !users && (
            <Formik
              validationSchema={ChatUsersSchema}
              onSubmit={(values: IChatUsers, actions) => {
                Disptach(setChatUsersAction(values));
              }}
              initialValues={{
                userName1: '',
                userName2: '',
              }}
              >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={(event: React.SyntheticEvent) => {
                  event.preventDefault();
                  handleSubmit();
                }}>
                  <Form.Row>
                    <Form.Group as={Col} sm="12" controlId="userName1">
                    <Form.Label>First Username:</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="userName1">@</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Username"
                        aria-describedby="userName1"
                        name="userName1"
                        value={values.userName1}
                        onChange={handleChange}
                        isInvalid={!!errors.userName1}
                      />         
                      <Form.Control.Feedback type="invalid" tooltip>
                        { errors.userName1}
                      </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} sm="12" controlId="userName2">
                    <Form.Label>Second Username:</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="userName2">@</InputGroup.Text>
                      </InputGroup.Prepend>
                        <Form.Control
                          type="text"
                          placeholder="Enter Second Username"
                          aria-describedby="userName2"
                          name="userName2"
                          value={values.userName2}
                          onChange={handleChange}
                          isInvalid={!!errors.userName2}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {(errors.userName2 && touched.userName2) ? errors.userName2 : null}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                  </Form.Row>
                  <Button type="submit">Start Chatting</Button>
                </Form>
                )}
            </Formik>
          ) }
        </Col>
      </Row>
  );
}
