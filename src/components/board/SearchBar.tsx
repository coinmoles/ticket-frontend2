import React from 'react'
import { Button, Container, Dropdown, Form, Icon, Input } from 'semantic-ui-react'

export const SearchBar: React.FC = () => {
    const searchOptions = [
        { key: 'tb', text: 'Title + Body', value: 'tb' },
        { key: 't', text: 'Title', value: 't' },
        { key: 'b', text: 'Body', value: 'b' },
        { key: 'a', text: 'Author', value: 'a' }
    ]

    return (
        <Container textAlign="center">
            <Form>
                <Form.Group>
                    <Form.Select fluid width={4} options={searchOptions} />
                    <Form.Input fluid width={12} icon={<Icon name='search' link/>} />
                </Form.Group>
            </Form>
        </Container>
    )
}