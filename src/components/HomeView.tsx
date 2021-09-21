import React from 'react'
import { Header, Message } from 'semantic-ui-react'

export const HomeView: React.FC = () => {
    return (
        <div>
            <Header as='h1'>
                환영합니다!
                <Header.Subheader>
                    포럼은 포럼입니다
                </Header.Subheader>
            </Header>

            <Header as='h3'>
                제공되는 기능
            </Header>
            <Message header='멀라 관리' content='아멀랑' />
            <Message header='멀라 찾기' content='꺄르륵' />

            <Header as='h3'>
                추가 예정 기능
            </Header>
            <Message header='멀라 다운로드' content='멀라 다운로드' />
        </div>
    )
}