import { HomeView } from './HomeView';
import { withBasicView } from '../withBasicView';

export default function HomePage() {
    const HomeWithBasicView = withBasicView(HomeView);

    return <HomeWithBasicView />
}