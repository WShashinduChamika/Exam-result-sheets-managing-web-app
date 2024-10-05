import React, { useState } from 'react'
import ResultTable from '../ResultTable'
import DropDown from '../DropDown'

function HODResult() {
    const status = ['Medical', 'AB']

    const [students, setStudents] = useState([
        {
            index: '19APC3951',
            result: 'A'
        },
        {
            index: '19APC3952',
            result: 'AB'
        },
        {
            index: '19APC3953',
            result: 'C'
        },
        {
            index: '19APC3954',
            result: 'Medical'
        },
        {
            index: '19APC3951',
            result: 'A'
        },
        {
            index: '19APC3952',
            result: 'AB'
        },
        {
            index: '19APC3953',
            result: 'C'
        },
        {
            index: '19APC3954',
            result: 'Medical'
        }
    ])
    return (

        <div>
            <div className='mt-5 w-full flex flex-col'>
                <div className='w-full flex flex-col items-center'>
                    <div className='mt-5' >
                        <h3 className='text-xl text-primary-txt'>345677 - Statistical Distribution - Result Sheet</h3>
                    </div>
                </div>
                <div className='mt-5 w-full'>
                    <ResultTable students={students} setStudents={setStudents} user='hod' />
                </div>
                <div className='mt-4 mr-20 flex gap-3 justify-end'>
                    <button
                        className='mt-3 mr-44 py-2 px-10 bg-secondary text-white border-btn-border text-[16px] border-[1px]'
                    >
                        Approve
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HODResult
