import BoardView from './Board';
import { withBasicView } from '../withBasicView';

export default function BoardPage() {
    const BoardWithBasicView = withBasicView(BoardView);

    return <BoardWithBasicView />
}