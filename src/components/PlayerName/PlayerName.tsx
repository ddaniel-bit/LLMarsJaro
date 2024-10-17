import React, { FormEvent } from 'react'
import { useState } from 'react'
import styles from

const PlayerName = () => {
const [isEdit, setIsEdit] = useState<boolean>(true)
const handleChangeEdit = ()=>{
    setIsEdit(!isEdit)
}
const handlePlayerNameChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setPlayerName(e.target.value)
}
const handleSubmit = (e:FormEvent)=>{
    e.preventDefault();
    handleChangeEdit();
}
  return (
    <>
    {isEdit ?
    (
    <div onClick={handleChangeEdit} className='PlayerName'>
        <h1>PlayerName</h1>
    </div>
    )
    :
    (
        <form className='PlayerInput'>
            <input type="text" value={playerName} />
            <button type='button'>Save Name</button>
        </form>
    )
}
    
    </>
  )
}

export default PlayerName