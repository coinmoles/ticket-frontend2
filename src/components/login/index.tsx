import { LoginForm } from './LoginForm';
import { withCenterView } from '../withCenterView';

export default function LoginPage() {
    const PostWithBasicView = withCenterView(LoginForm);

    return <PostWithBasicView />
}