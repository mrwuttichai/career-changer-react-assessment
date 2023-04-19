import { useState } from "react"

const CreateUser = ({addEmployee}) => {
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [position, setPosition] = useState('')

    const insertName = (e) => {
        setName(e.target.value)
    }
    const insertLastName = (e) => {
        setLastName(e.target.value)
    }
    const insertPosition = (e) => {
        setPosition(e.target.value)
    }
    const saveInfo = () => {
        addEmployee({
            name,
            lastname,
            position,
        })
    }


    return (
        <div>
            <input onChange={insertName} type="text" placeholder="Name"/>
            <input onChange={insertLastName} type="text" placeholder="Last Name"/>
            <input onChange={insertPosition} type="text" placeholder="Position"/>
            <button onClick={saveInfo}>Save</button>
        </div>
    )
}
export default CreateUser