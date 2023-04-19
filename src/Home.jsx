import { useState } from "react"
import Layout from "./Layout"
import Table from "./Table"
import CreateUser from "./CreateUser"

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  const [pages, setPages] = useState('homepage')
  const [employees, setEmployee] = useState(mockEmployees)

  const userPage = () => {
    setPages('userpage')
  }

  const adminPage = () => {
    setPages('adminpage')
  }

  const addEmployee = (newEmployee) => {
    const employeeId = employees.map(e => {
      return e.id
    } )
    const maxId = Math.max(...employeeId) 
    newEmployee = {id: maxId +1, ...newEmployee}
    setEmployee([...employees, newEmployee])
  }

  const deleteInfo = (removeId) => {
    const deleteEmployee = employees.filter((e) => {
      return e.id !== removeId
    })
    setEmployee(deleteEmployee)
  }

  const displayText = () =>{
    if (pages === 'adminpage'){
      return <h1>Home - Admin Sector</h1>
    } else if (pages === 'userpage'){
      return <h1>Home - User Sector</h1>
    } else {
      return <h1>React - Assessment</h1>
    }
  }

  return (
    <Layout>
            <h1>Generation Thailand</h1>
            {displayText()}
            <button onClick={userPage}>User Home Sector</button>
            <button onClick={adminPage}>Admin Home Sector</button>
            {pages === 'userpage' ? <Table employees= {employees} /> : null}
            {pages === 'adminpage' ?
            <>
                <CreateUser addEmployee = {addEmployee}/>
                <Table employees= {employees} inAdmin = {true} deleteInfo = {deleteInfo}/>
            </>
            : null}
    </Layout>
  )
}



export default Home
