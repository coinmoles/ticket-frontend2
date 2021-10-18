import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Container } from 'semantic-ui-react'

export const Navbar: React.FC = () => {
    return (
        <Segment inverted style={{borderRadius: 0}} className='w-100'>
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
                    <Link to="/signup">
                        <Menu.Item
                            name='Sign Up'
                            className='cursor-pointer'
                            />
                    </Link>
                    <Link to="/login">
                        <Menu.Item
                            name='Login'
                            className='cursor-pointer'
                            />
                    </Link>
                </Menu.Menu>
            </Menu>
        </Segment>
    )
}