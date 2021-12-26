import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

export const Navbar: React.FC = () => {
    return (
        <Segment inverted style={{ borderRadius: 0 }} className='w-100'>
            <Menu inverted secondary stackable>
                <Link to="/">
                    <Menu.Item header>
                        SSHS-Forum
                    </Menu.Item>
                </Link>
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
            </Menu>
        </Segment>
    )
}