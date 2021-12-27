import React, { useEffect, useState } from 'react'
import { Container, DropdownItemProps, Form, Header, Segment } from 'semantic-ui-react'
import { createOptions } from '../../util/helper/createOptions';
import { cancel } from './cancel'


export const CancelView: React.FC = () => {
    const [options, setOptions] = useState<DropdownItemProps[] | null>(null);
    const [hakId, setHakId] = useState<string>("");
    const [performanceName, setPerformanceName] = useState<string | null>(null);
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        createOptions().then(response => {
            setOptions(response);
        });
    }, [])


    return (
        <Container >
            <Header as="h1" content="예매 취소" />
            <Segment>
                <Form>
                    <Header as="h3" content="학번(4자리)" />
                    <Form.Input type="number" onChange={event => setHakId(event.target.value)} value={hakId} />
                    <Header as="h3" content="공연" />
                    <Form.Dropdown
                        fluid 
                        selection
                        scrolling
                        options={options === null ? [] : options}
                        loading={options === null}
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
                        await cancel(hakId, password, performanceName);
                    }
                    } floated='right' content="예매" />
                    <div style={{clear: "both"}} />
                </Form>
            </Segment>
        </Container>
        
    )
}