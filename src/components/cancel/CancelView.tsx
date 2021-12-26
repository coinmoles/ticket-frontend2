import React from 'react'
import { Container, Form, Header, Segment } from 'semantic-ui-react'
import { performances } from '../../util/DB'


export const CancelView: React.FC = () => {
    const performanceOptions = performances.map((performance) => {
        return {
            key: performance.name,
            text: `${performance.name} (${performance.group})`,
            value: performance.name
        }
    })

    return (
        <Container >
            <Header as="h1" content="예매 취소" />
            <Segment>
                <Form style={{overflow: "hidden"}}>
                    <Header as="h3" content="교번(5자리)" />
                    <Form.Input />
                    <Header as="h3" content="공연" />
                    <Form.Dropdown 
                        fluid 
                        selection 
                        options={performanceOptions}
                    />
                    <Header as="h3" content="비밀번호" />
                    <Form.Input hidden />
                    <Form.Button floated='right' content="취소" />
                </Form>
            </Segment>
        </Container>
        
    )
}