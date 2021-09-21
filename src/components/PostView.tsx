import React from 'react'
import { Header, Table } from 'semantic-ui-react'

export const PostView: React.FC = () => {
    return (
        <div>
            <Header as='h1'>Board</Header>
            <Table>
                <Table.Header>
                    <Table.HeaderCell className='w-1/12'>#</Table.HeaderCell>
                    <Table.HeaderCell className='w-1/2'>Title</Table.HeaderCell>
                    <Table.HeaderCell className='w-1/12'>Views</Table.HeaderCell>
                    <Table.HeaderCell className='w-1/12'>Author</Table.HeaderCell>
                    <Table.HeaderCell className='w-1/12'>Date</Table.HeaderCell>
                </Table.Header>
            </Table>
        </div> 
    )
}