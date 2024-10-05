import React, { useState } from 'react'
import DropDown from '../DropDown'
import ResultTable from '../ResultTable';

function ResultForm() {

    const results = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'E', 'F']
    const [students, setStudents] = useState([
        {
            index: '19APC3951',
            result: 'A'
        },
        {
            index: '19APC3952',
            result: 'B'
        },
        {
            index: '19APC3953',
            result: 'C'
        },
        {
            index: '19APC3954',
            result: 'D'
        }
    ])
    const [enableEdit, setEnableEdit] = useState(false)

    const handleAddResult = () => {
        setStudents([...students, 'Student5'])
    }

    const handleEditResult = () => {
        setEnableEdit(!enableEdit)
    }

    return (
        <div>
            <div className='mx-8 mt-5 flex flex-col items-center'>
                <div className='w-full flex justify-start'>
                    <h3 className='text-xl text-primary-txt'>Enter Exam Results</h3>
                </div>
                <div className='w-9/12 mt-3'>
                    <div className='grid grid-cols-7 gap-3'>
                        <div className=' col-span-3'>
                            <input
                                type='text'
                                placeholder='Enter Index Number'
                                className='p-4 w-full h-12 border-[1px] border-black rounded-lg focus:border-secondary focus:border-2 focus:outline-none placeholder-table-txt placeholder-opacity-100'
                            ></input>
                        </div>
                        <div className='col-span-3'>
                            <DropDown type="Result" options={results} />
                        </div>
                        <div className=' col-span-1 bg-primary'>
                            <button
                                onClick={handleAddResult}
                                className='w-full h-12 bg-secondary text-white border-btn-border text-[16px] border-[1px]'
                            >Add</button>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-2'>
                   <ResultTable students={students} setStudents={setStudents} user='lecture'/>
                </div>
                <div className='w-full mt-5 mr-16 flex justify-end'>
                    <button className='py-2 px-10 bg-secondary text-white border-btn-border text-[16px] border-[1px]'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ResultForm
