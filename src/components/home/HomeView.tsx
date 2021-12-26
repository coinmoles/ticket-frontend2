import React from 'react'
import { Header, Message } from 'semantic-ui-react'

export const HomeView: React.FC = () => {
    return (
        <div>
            <Header as='h1'>
                환영합니다!
                <Header.Subheader>
                    예매는 천년제 공연 예매를 돕기 위해 만들어진 웹사이트입니다.
                </Header.Subheader>
            </Header>

            <Header as='h3'>
                제공되는 기능
            </Header>
            <Message header='공연 예매' content='천년제 공연을 예매합니다.' />
            <Message header='예매 취소' content='공연 예매를 취소합니다.' />
        </div>
    )
}