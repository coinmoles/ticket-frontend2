import React from 'react'
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const PageList: React.FC = () => {
    const currentPage = 0;
    const pageRange = Array.from(Array(10).keys()).map((x) => x + currentPage);
    const pageOptions = pageRange.map((page) => {
        return (
            <Link to={`/board/list/${page}`} key={page}>
                <Menu.Item>{page}</Menu.Item>
            </Link>
        )
    })
    

    return (
        <div className="ui center aligned container">
            <div className="ui secondary compact menu">
                {pageOptions}
            </div>
        </div>
    )
}