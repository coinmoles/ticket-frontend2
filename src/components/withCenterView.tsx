import React from 'react';

export const withCenterView = (
    BaseComponent: React.ComponentType
) => {
    return class extends React.Component {
        render() {
            return (
                <div className="flex text-left items-center justify-center p-10 min-h-screen bg-gray-200">
                    <div className="max-w-2xl w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 bg-white p-10 rounded-2xl shadow-2xl">
                        <BaseComponent />
                    </div>
                </div>
            )
        }
    }
}