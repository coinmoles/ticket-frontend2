import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Comment, Divider, Form, Header, Icon, Segment } from 'semantic-ui-react'
import { CommentType } from '../../lib/types'

type CommentProps = {
    comments: Array<CommentType>
}

const commentThread = (commentList: Array<CommentType>): Array<ReactElement> => {
    if (commentList.length === 0){
        return []
    }

    return commentList.map((comment: CommentType): ReactElement => {
        const childThread = commentThread(comment.replies)
        return (
            <Comment key={comment.id}>
                <Comment.Avatar as='a'  src={comment.author.avatar}/>
                <Comment.Content>
                    <Comment.Author as='a'>{comment.author.nickname}</Comment.Author>
                    <Comment.Metadata>{comment.author.nickname}</Comment.Metadata>
                    <Comment.Text content={comment.content} />
                    <Comment.Actions>
                        <div className='inline'>
                            <a style={{margin: '0px'}}><Icon style={{margin: '0px'}} name='arrow up' /></a>
                            <div className='inline mx-1'>{comment.vote}</div>
                            <a><Icon name='arrow down' /></a>
                        </div>
                        <Link to='/'>Reply</Link>
                        <a>Share</a>
                    </Comment.Actions>
                </Comment.Content>
                {childThread.length === 0 ? null : (
                    <Comment.Group threaded>
                        {childThread}
                    </Comment.Group>
                )}  
            </Comment>
        )
    })
}

export const CommentView: React.FC<CommentProps> = (props: CommentProps) => {
    const { comments } = props

    return (
        <Segment>
            <Comment.Group threaded className='min-w-full'>
                <Header as='h4' content='Comments' />
                <Form reply>
                    <Form.TextArea style={{resize: 'none'}} />
                    <Form.Button basic icon labelPosition='right'>
                        Comment
                        <Icon name='comment alternate outline' />
                    </Form.Button>
                </Form>
                <Divider />
                {commentThread(comments)}
            </Comment.Group>
        </Segment>
    )
}