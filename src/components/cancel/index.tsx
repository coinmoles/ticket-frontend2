import { withBasicView } from '../view/withBasicView';
import { CancelView } from './CancelView';

export default function CancelPage() {
    const CancelWithBasicView = withBasicView(CancelView);

    return <CancelWithBasicView />
}