import PostView from './PostView';
import { withBasicView } from '../view/withBasicView';

export default function PostPage() {
    const PostWithBasicView = withBasicView(PostView);

    return <PostWithBasicView />
}