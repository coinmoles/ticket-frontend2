import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Button, Container, Header, Grid, Segment, Icon } from 'semantic-ui-react'
import { showVote } from '../../lib/helper/showVote'
import { timePassed } from '../../lib/helper/timePassed'
import { CommentView } from './Comments'
import { tempPost } from '../../lib/tempContent'

interface PostParams { 
    postId: string
};

const PostList: React.FC<RouteComponentProps<PostParams>> = ({ match }) => {
    const { postId }: PostParams = match.params;
    
    return (
        <Container>
            <Segment>
                <Grid>
                    <Grid.Column className='text-center' width={1}>
                        <Button basic circular icon='arrow up' link></Button>
                        <p className='align-middle my-2 m-auto'>{showVote(tempPost.vote)}</p>
                        <Button basic circular icon='arrow down' link></Button>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <Container>
                            {`r/${tempPost.subreddit}\t`}
                            <div className='opacity-50 inline text-xs'>
                                {`Posted By ${tempPost.author.nickname} ${timePassed(tempPost.date)}`}
                            </div>
                        </Container>
                        <Header as='h2'>
                            {tempPost.title}
                        </Header>
                        <Header 
                            dividing
                            sub
                            textAlign='right'
                            />
                        <Container className="my-5" textAlign="justified">
                            <p>{tempPost.content}</p>
                        </Container>
                        <Container>
                            <div className='opacity-50 inline'><Icon name='comment alternate' />{`${tempPost.comments.length} Comments\t`}</div>
                            <div className='opacity-50 inline'><Icon name='share' />Share</div>
                        
                        </Container>
                    </Grid.Column>
                </Grid>
            </Segment>
            <CommentView comments={tempPost.comments} />
        </Container> 
    )
}

export default withRouter(PostList)