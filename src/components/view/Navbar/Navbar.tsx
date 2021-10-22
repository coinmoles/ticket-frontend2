import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import { RootState } from '../../../redux';
import { toPath } from '../../../redux/path/pathSlice';
import { LoginButton } from './LoginButton';
import { LoginStatus } from './LoginStatus';

export const Navbar: React.FC = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    return (
        <Segment inverted style={{ borderRadius: 0 }} className='w-100'>
            <Menu inverted secondary stackable>
                <Menu.Item header>
                    SSHS-Forum
                </Menu.Item>
                <Link to="/">
                    <Menu.Item
                        name='Home'
                        className='cursor-pointer'
                    />
                </Link>
                <Link to="/board/list/0">
                    <Menu.Item
                        name='Board'
                        className='cursor-pointer'
                    />
                </Link>
                <Menu.Menu position='right'>
                    {!isLoggedIn ?
                        <LoginButton /> :
                        <LoginStatus />}
                </Menu.Menu>
            </Menu>
        </Segment>
    )
}