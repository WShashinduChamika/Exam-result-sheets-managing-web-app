import React, { useState } from 'react'
import ResultTable from '../ResultTable'

function DeanResultCollectionResult() {

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
            <div className='mt-5 w-full flex flex-col items-center'>
                <div className='w-10/12 flex flex-col items-start'>
                    <div className='mt-5' >
                        <h3 className='text-xl text-primary-txt'>IS1101 - Fundamentals of Information Systems</h3>
                    </div>
                </div>
                <div className='mt-5 w-full'>
                    <ResultTable students={students} setStudents={setStudents} user='dean' />
                </div>
            </div>
        </div>
    )
}

export default DeanResultCollectionResult
