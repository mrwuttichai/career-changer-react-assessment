const Table = ({employees,inAdmin, deleteInfo}) => {
    const toDelete = (id) => {
        deleteInfo(id)
    }
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        {inAdmin && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                      {
                        employees.map((employee)=> {
                            return (
                                <tr key= {employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.position}</td>
                                    {inAdmin && <td>
                                        <button onClick={()=>toDelete(employee.id)}>Delete</button>
                                    </td>}
                                </tr>

                            )
                        })
                      }  
                </tbody>
            </table>
        </div>
    )
}
export default Table