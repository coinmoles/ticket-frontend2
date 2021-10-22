import React, { createRef, RefObject } from 'react';
import { Ref } from 'semantic-ui-react';
import { Navbar } from './Navbar/Navbar'
import { PageFooter } from './PageFooter';

export const withBasicView = (
    BaseComponent: React.ComponentType
) => {
    return class extends React.Component {
        render() {
            const contextRef: RefObject<HTMLElement> = createRef()
            return (
                <div className='text-left'>
                    <div className="items-center w-screen min-h-screen">
                        <Ref innerRef={contextRef}>
                            <Navbar />
                        </Ref>

                        <div className="w-screen h-full flex items-center justify-center">
                            <div className="w-full max-w-7xl p-10">
                                <BaseComponent />
                            </div>
                        </div>
                    </div>
                    <PageFooter />
                </div>
            )
        }
    }
}