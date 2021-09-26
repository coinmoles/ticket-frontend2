import { HomeView } from '../components/home';
import { withBasicView } from '../components/withBasicView';

export default function Home() {
    const HomeWithBasicView = withBasicView(HomeView);

    return <HomeWithBasicView />
}