import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import { RootState } from '../../../redux';
import { toPath } from '../../../redux/path/pathSlice';
import { LoginButton } from './LoginButton';
import { LoginStatus } from './LoginStatus';

export const Navbar: React.FC = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const currentPath = useSelector((state: RootState) => state.path.currentPath);
    const dispatch = useDispatch();

    return (
        <Segment inverted style={{ borderRadius: 0 }} className='w-100'>
            <Menu inverted secondary stackable>
                <Link to="/" onClick={() => dispatch(toPath("Home"))}>
                    <Menu.Item header>
                        SSHS-Forum
                    </Menu.Item>
                </Link>
                <Link to="/" onClick={() => dispatch(toPath("Home"))}>
                    <Menu.Item
                        active={currentPath === "Home"}
                        name='Home'
                        className='cursor-pointer'
                    />
                </Link>
                <Link to="/board/list/0" onClick={() => dispatch(toPath("Board"))}>
                    <Menu.Item
                        active={currentPath === "Board"}
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