import PostList from '../components/board';
import { withBasicView } from '../components/withBasicView';

export default function Board() {
    const BoardWithBasicView = withBasicView(PostList);

    return <BoardWithBasicView />
}