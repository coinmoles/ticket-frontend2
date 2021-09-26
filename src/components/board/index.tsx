import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Header, Table } from 'semantic-ui-react'
import { PageList } from './PageList'
import { SearchBar } from './SearchBar'
import { PostType } from '../../lib/types'
import { tempPostList } from '../../lib/tempContent'
import { timePassed } from '../../lib/helper/timePassed'

interface PageParams { 
    page: string
};

const PostList: React.FC<RouteComponentProps<PageParams>> = ({ match }) => {

    const { page }: PageParams = match.params;
    console.log(page);
    const renderedPosts = tempPostList.map(
        (post: PostType) => (
            <Table.Row key={post.id}>
                <Table.Cell>{post.id}</Table.Cell>
                <Table.Cell>
                    <Link to={`/board/view/${post.id}`}>{post.title} </Link>
                </Table.Cell>
                <Table.Cell>{post.views}</Table.Cell>
                <Table.Cell>{post.author.nickname}</Table.Cell>
                <Table.Cell>{timePassed(post.date)}</Table.Cell>
            </Table.Row>
        )
    )
    
    return (
        <div className="items-center">
            <Header as='h1'>Board</Header>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className='w-1/12'>#</Table.HeaderCell>
                        <Table.HeaderCell className='w-1/2'>Title</Table.HeaderCell>
                        <Table.HeaderCell className='w-1/12'>Views</Table.HeaderCell>
                        <Table.HeaderCell className='w-1/12'>Author</Table.HeaderCell>
                        <Table.HeaderCell className='w-1/12'>Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {renderedPosts}
                </Table.Body>
            </Table>

            <PageList />
            <SearchBar />
        </div> 
    )
}

export default withRouter(PostList)