import React from 'react'

import { useSelector } from 'react-redux'

const Notification = () => {
    const notification = useSelector(state => state.notification)

    if (notification === null) {
        return null
    }

    return (
        <div>
            <div className={notification.type}>
                {notification.message}
            </div>
        </div>
    )
}

export default Notification