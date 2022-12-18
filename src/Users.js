import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Users = () => {
    const {users} = useSelector(abc => abc)
    const dispatch = useDispatch()
    // console.log(users)
  return (
    <div >
        {users ? users.map(user =>(
            <div className='row' key={user.id}>
                <div className="name">{user.name}</div>
                <div className="address">{user.address}</div>
                <div className='user.btn'>
                <button className='btn btn-danger' onClick={()=>dispatch({type: 'DELETE_USER', id: user.id})}>Delete</button>
                </div>
            </div>
        )): ''}
    </div>
  )
}

export default Users