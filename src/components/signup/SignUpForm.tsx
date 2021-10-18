import React from 'react'
import { Form, Header } from 'semantic-ui-react'

export const SignUpForm: React.FC = () => {
    return (
        <Form>
            <Header as='h2'>Sign Up</Header>
            <Form.Input required label="Username" placeholder='Enter a username' />
            <Form.Group widths='equal'>
                <Form.Input required label="First Name" placeholder='Enter your fist name' />
                <Form.Input required label="Last Name" placeholder='Enter your last name' />
            </Form.Group>
            <Form.Input label="Email" placeholder='Enter yours e-mail' />
            <Form.Input required type='password' label="Password" placeholder="Enter a password" />
            <Form.Input required type='password' label="Password Confirm" placeholder="Confirm your password" />
            <Form.Group>
                <Form.Button primary icon='sign-in' content='Sign Up'/>
            </Form.Group>
        </Form>
    )
}