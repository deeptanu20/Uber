import React from 'react'

const UserLogin = () => {
  return (
    <div className='p-7'>
      <form>
        <h3>What's your phone number or email?</h3>
        <input type='email' placeholder='email@gmail.com'></input>
        <h3>Enter Password</h3>
        <input type='password' placeholder='password'></input>
        <button>Login</button>
      </form>
    </div>
  )
}

export default UserLogin
