import React from 'react'

const Stuff = ({match: {params: {status, idOne, idTwo}}, history}) => {
  if(status !== localStorage.status) {
    console.log(status);
    alert('Permission denided')
    history.push('/')
  }
  return (
    <div>
      {status} {idOne} {idTwo} route
    </div>
  )
}

export default Stuff
