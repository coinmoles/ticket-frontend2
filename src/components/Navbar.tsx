import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'

export const Navbar: React.FC = () => {
    return (
        <Segment inverted style={{ borderRadius: 0}} className='w-100'>
            <Menu inverted stackable secondary>
                <Menu.Item header>
                    SSHS-Forum
                </Menu.Item>
                <Link to="/">
                    <Menu.Item 
                        name='Home'
                        className='cursor-pointer'
                    />
                </Link> 
                <Link to="/board">
                    <Menu.Item
                        name='Board'
                        className='cursor-pointer'
                        />
                </Link>
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='Sign Up'
                        className='cursor-pointer'
                    />
                    <Menu.Item
                        name='Login'
                        className='cursor-pointer'
                    />
                </Menu.Menu>
            </Menu>
        </Segment>
    )
}