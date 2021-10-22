import React from 'react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { login } from '../../../redux/auth/authSlice';
import { GOOGLE_AUTH_CLIENT_ID, REDIRECT_URI } from '../../../secret';
import { googleLogin } from '../../../util/google';

interface GoogleButtonProps {
    onClick: () => void;
    disabled?: boolean | undefined;
}

const GoogleButton = (renderProps: GoogleButtonProps) => {
    return <Menu.Item
        onClick={renderProps.onClick}
        name='Sign In'
        className='cursor-pointer'
    />
}

export const LoginButton: React.FC = () => {
    const dispatch = useDispatch();

    const onSuccess = async (response: GoogleLoginResponse | GoogleLoginResponseOffline): Promise<void> => {
        if (response.code !== undefined)
            dispatch(login(await googleLogin(response.code)));
        else
            throw new Error();
    }

    return (
        <GoogleLogin
            clientId={GOOGLE_AUTH_CLIENT_ID}
            buttonText="Login"
            responseType="code"
            accessType="offline"
            onSuccess={onSuccess}
            render={GoogleButton}
            redirectUri={REDIRECT_URI}
            cookiePolicy="single_host_origin"
        />
    )
}