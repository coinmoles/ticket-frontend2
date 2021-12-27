import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Icon, Message } from 'semantic-ui-react'

export const HomeView: React.FC = () => {
    return (
        <div>
            <Header as='h1'>
                환영합니다!
                <div className='my-3' />
                <div className="text-left">
                
                </div>
            </Header>

            <Message warning icon>
                <Icon name='ticket' />
                <Message.Content>
                    Yemae는 천년제 공연 예매를 돕기 위해 만들어진 웹사이트입니다.

                    공연 관람은 사전에 선착순으로 신청을 받고 지정 좌석제로 운영됩니다. 공연자와 관람자의 인원 제한이 존재하기 때문에, 관객 수는 공연에 따라 달라질 예정입니다. 공연자도 최대한 마스크를 쓰고 진행하며 관중은 함성을 자제해야 합니다.                 
                </Message.Content>
            </Message>
            <Message>
                <Message.Header>
                    예매 방법
                </Message.Header>
                공연은 가군, 나군, 다군으로 나뉘며, 한 사람은 각 군에서 한 개의 공연에만 예매를 신청할 수 있습니다. 원하는 공연을 선택한 후 예매해 주시길 바랍니다.
                예매 시 입력하는 비밀번호는 예매 취소 시 필요하며, 비밀번호를 잊어버린 경우 복구할 방법이 없으니 어딘가에 기록해 주시길 바랍니다.

            </Message>
            <Header as='h3'>
                제공되는 기능
            </Header>
            <Link to="/book">
                <Message header='공연 예매' content='천년제 공연을 예매합니다.' />
            </Link>
            <div className="my-3" />
            <Link to="/cancel">
                <Message header='예매 취소' content='공연 예매를 취소합니다.' />
            </Link>
        </div>
    )
}