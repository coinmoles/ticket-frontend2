import React, { useState } from 'react'
import { Container, Form, Header, Segment } from 'semantic-ui-react'
import { performances } from '../../util/DB'
import { book } from './book'


export const BookView: React.FC = () => {
    const performanceOptions = performances.map((performance) => {
        return {
            key: performance.name,
            text: `${performance.name} (${performance.group})`,
            value: performance.name
        }
    })

    const [kyoId, setKyoId] = useState<string>("");
    const [performanceName, setPerformanceName] = useState<string | null>(null);
    const [password, setPassword] = useState<string>("");

    return (
        <Container >
            <Header as="h1" content="공연 예매" />
            <Segment>
                <Form style={{overflow: "hidden"}}>
                    <Header as="h3" content="교번(5자리)" />
                    <Form.Input type="number" onChange={event => setKyoId(event.target.value)} value={kyoId} />
                    <Header as="h3" content="공연" />
                    <Form.Dropdown
                        fluid 
                        selection
                        options={performanceOptions}
                        onChange={(event, data) => {
                            if (typeof data.value !== "string")
                                alert("Something Went Wrong");
                            else
                                setPerformanceName(data.value);
                        }}
                    />
                    <Header as="h3" content="비밀번호" />
                    <Form.Input onChange={(event) => setPassword(event.target.value)} value={password} />
                    <Form.Button onClick={async (event) => {
                        event.preventDefault();
                        await book(kyoId, password, performanceName);
                    }
                    } floated='right' content="예매" />
                </Form>
            </Segment>
        </Container>
        
    )
}