import React from 'react'
import { Header, Message } from 'semantic-ui-react'

export const HomeView: React.FC = () => {
    return (
        <div>
            <Header as='h1'>
                환영합니다!
                <Header.Subheader>
                    예매는 천년제 공연 예매를 돕기 위해 만들어진 웹사이트입니다.
                    공연 관람은 사전에 선착순으로 신청을 받고 지정 좌석제로 운영됩니다. 공연자와 관람자의 인원 제한이 존재하기 때문에, 관객 수는 공연에 따라 달라질 예정입니다. 공연자도 최대한 마스크를 쓰고 진행하며 관중은 함성을 자제해야 합니다.                 
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