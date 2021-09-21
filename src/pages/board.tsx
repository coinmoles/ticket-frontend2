import { PostView } from '../components/PostView';
import { withBasicView } from '../components/withBasicView';

export default function Board() {
    const HomeWithBasicView = withBasicView(PostView);

    return <HomeWithBasicView />
}