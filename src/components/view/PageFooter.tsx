import React from 'react';
import { Image } from 'semantic-ui-react';

export const PageFooter: React.FC = () => {
    return (
        <div className="w-screen text-white text-opacity-90" style={{ backgroundColor: "#1B1C1D" }}>
            <div className="w-screen h-full flex items-center justify-center">
                <div className="w-full max-w-7xl p-10 space-y-4">
                    <Image src={`/img/sshs.png`} size='small' style={{filter: "invert(100%)"}}/>
                    <p><b>Gyeopgang</b> by 서울과학고등학교 학생회 정보부</p>
                    <p>
                        Gyeopgang은 현재 서울과학고등학교에서 서버 비용을 지원받고 있으며,<br />
                        이를 제외한 모든 기획, 개발, 운영, 디자인은 서울과학고등학교 학생회 정보부가 담당합니다.
                    </p>
                    <p>
                        관련 문의/건의는 학생회 소통부를 이용해 주시면 감사하겠습니다.
                    </p>
                    <p>
                        © 2021 <b>서울과학고등학교 학생회 정보부</b>. All rights reserved. 
                    </p>
                </div>
            </div>
        </div>
    )
}