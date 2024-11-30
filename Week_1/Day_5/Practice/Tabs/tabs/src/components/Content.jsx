import React from 'react'

const Content = ({tabs,tabIndex}) => {
  return (
    <div className='content'>
        <p>{tabs[tabIndex].content}</p>
    </div>
  )
}

export default Content