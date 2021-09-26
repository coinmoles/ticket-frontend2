import PostView from '../components/post';
import { withBasicView } from '../components/withBasicView';

export default function Board() {
    const PostWithBasicView = withBasicView(PostView);

    return <PostWithBasicView />
}