import { HomeView } from '../components/HomeView';
import { withBasicView } from '../components/withBasicView';

export default function Home() {
    const HomeWithBasicView = withBasicView(HomeView);

    return <HomeWithBasicView />
}