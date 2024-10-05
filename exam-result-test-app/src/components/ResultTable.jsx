import React from 'react'
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from 'react'

function ResultTable(props) {

    const [students, setStudents] = useState(props.students)
    const [enableEdit, setEnableEdit] = useState(false)

    const handleEditResult = () => {
        setEnableEdit(!enableEdit)
    }

    return (
        <div className={`${props.user !== 'hod' && props.user !== 'dean' ? "ml-0" : "ml-48"}`}>
            <div className='flex flex-col items-center'>
                <div className={`mt-3 ${props.user !== 'hod' && props.user !== 'dean' ? "w-11/12" : "w-10/12"}`}>
                    <div className='grid grid-cols-8 gap-[1px]'>
                        {/* {
                            props.user !== 'hod' && props.user !== 'dean'?
                                <div className='p-2 col-span-1 flex items-center justify-center bg-primary'>
                                    <input type='checkbox' className='w-5 h-5'></input>
                                </div>
                                : <></>

                        } */}
                        <div className='p-2 col-span-2 flex items-center justify-center bg-primary'>
                            <h3 className='text-lg text-white'>No</h3>
                        </div>
                        <div className='col-span-3 flex items-center justify-center bg-primary'>
                            <h3 className='text-lg text-white'>Student Index</h3>
                        </div>
                        <div className='col-span-2 flex items-center justify-center bg-primary'>
                            <h3 className='text-lg text-white'>Result</h3>
                        </div>
                        {
                            props.user !== 'hod' && props.user !== 'dean' ?
                                <div className='col-span-1 flex items-center justify-center bg-primary'></div>
                                : <></>
                        }
                    </div>
                </div>
                <div className={`${props.user !== 'hod' && props.user !== 'dean' ? "w-11/12" : "w-10/12"} max-h-72 overflow-y-scroll scrollbar-hide`}>
                    {students.map((student, index) => (
                        <div key={index} className='w-full mb-1'>
                            <div className='grid grid-cols-8 gap-[1px]'>
                                {/* {
                                    props.user !== 'hod' && props.user !== 'dean' ?
                                        <div className='p-3 col-span-1 flex items-center justify-center bg-table-bg'>
                                            <input type='checkbox' className='w-5 h-5'></input>
                                        </div>
                                        : <></>
                                } */}
                                <div className='p-3 col-span-2 flex items-center justify-center bg-table-bg'>
                                    <p className='text-lg text-table-txt'>{index + 1}</p>
                                </div>
                                <div className='p-0 col-span-3 flex items-center justify-center bg-table-bg'>
                                    <input
                                        disabled={!enableEdit}
                                        type='text'
                                        placeholder={student.index}
                                        className='p-3 w-full h-full text-lg text-center bg-transparent border-transparent focus:border-secondary focus:border-2 focus:outline-none placeholder-table-txt placeholder-opacity-100'
                                    ></input>
                                </div>
                                <div className='p-0 col-span-2 flex items-center justify-center bg-table-bg border-none'>
                                    <input
                                        disabled={!enableEdit}
                                        type='text'
                                        placeholder={student.result}
                                        className='p-3 w-full h-full text-lg text-center bg-transparent border border-transparent focus:border-secondary focus:border-2 focus:outline-none  placeholder-table-txt placeholder-opacity-100'
                                    ></input>
                                </div>
                                {
                                    props.user !== 'hod' && props.user !== 'dean' ?
                                        props.user === 'dptSecretary' ?
                                            <div className='p-3 col-span-1 flex items-center justify-center gap-1 bg-table-bg'>
                                                {
                                                    student.result === 'Medical' || student.result === 'AB' ?
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <MdEdit size={20}
                                                                onClick={handleEditResult}
                                                                className='text-edit-icon-bg cursor-pointer'
                                                            />
                                                            <RiDeleteBin6Line size={20} className='text-dlt-icon-bg cursor-pointer' />
                                                        </div> : <></>
                                                }
                                            </div>

                                            : <div className='p-3 col-span-1 flex items-center justify-center gap-1 bg-table-bg'>
                                                <MdEdit size={20}
                                                    onClick={handleEditResult}
                                                    className='text-edit-icon-bg cursor-pointer'
                                                />
                                                <RiDeleteBin6Line size={20} className='text-dlt-icon-bg cursor-pointer' />
                                            </div>
                                        : <></>
                                }
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default ResultTable
