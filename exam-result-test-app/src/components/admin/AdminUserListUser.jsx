import React, { useState } from 'react'

function AdminUserListUser() {

    const [fullName, setFullName] = useState('Sabra User')
    const [userRole, setUserRole] = useState('User Role')
    const [email, setEmail] = useState('User email')
    const [faculty, setFaculty] = useState('User Faculty')
    const [department, setDepartment] = useState('User Department')
    const [employeeId, setEmployeeId] = useState('User Employee Id')

    return (
        <div className='mt-10 w-full'>
            <div className='flex w-full flex-col items-center'>
                <div className='mt-3 w-11/12 flex items-center justify-between'>
                    <h3 className='text-2xl text-primary-txt'>User Details</h3>
                </div>
                <div className='mt-8 py-4 px-7 w-11/12 flex flex-col items-start gap-0 bg-tertiary-bg'>
                    <p className='py-2 text-xl'>Full Name : </p>
                    <p className='py-2 text-xl'>User Role: </p>
                    <p className='py-2 text-xl'>Email: </p>
                    {
                        userRole === 'Lecture' || userRole === 'Department Secretary' || userRole === 'HOD' || userRole === 'DEAN' ?
                                <p className='py-2 text-xl'>Faculty: </p> : <></>
                    }
                    {
                        userRole === 'Lecture' || userRole === 'Department Secretary' || userRole === 'HOD' ?
                                <p className='py-2 text-xl'>Department: </p> : <></>
                    }
                    {
                         userRole === 'Exam Department' || userRole === 'Registar' || userRole === 'VC' ?
                         <p className='py-2 text-xl'>Employee ID: </p> :<></>
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminUserListUser
