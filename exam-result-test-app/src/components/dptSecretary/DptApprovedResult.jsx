import React, { useState } from 'react'
import ResultTable from '../ResultTable'

function DptApprovedResult() {
    const [students, setStudents] = useState([
        {
            index: '19APC3951',
            result: 'A'
        },
        {
            index: '19APC3952',
            result: 'A'
        },
        {
            index: '19APC3953',
            result: 'C'
        },
        {
            index: '19APC3954',
            result: 'B+'
        },
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
            result: 'C-'
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
                    <ResultTable students={students} setStudents={setStudents} user='dean' />
                </div>
            </div>
        </div>
    )
}

export default DptApprovedResult
