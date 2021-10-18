import { SignUpForm } from './SignUpForm';
import { withCenterView } from '../withCenterView';

export default function SignUpPage() {
    const PostWithBasicView = withCenterView(SignUpForm);

    return <PostWithBasicView />
}