import React from 'react'
import { Form, Header } from 'semantic-ui-react'

export const LoginForm: React.FC = () => {
    return (
        <Form>
            <Header as='h2'>Login</Header>
            <Form.Input required label="Username" placeholder='Enter your username' />
            <Form.Input required type='password' label="Password" placeholder="Enter your password" />
            <Form.Button primary icon='sign-in' content='Login'/>
        </Form>
    )
}