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
                        name='홈'
                        className='cursor-pointer'
                    />
                </Link>
                <Link to="/book">
                    <Menu.Item
                        name='예매'
                        className='cursor-pointer'
                    />
                </Link>
                <Link to="/cancel">
                    <Menu.Item
                        name='취소'
                        className='cursor-pointer'
                    />
                </Link>
            </Menu>
        </Segment>
    )
}