import React, { useState } from 'react'
import ResultTable from '../ResultTable'
import DropDown from '../DropDown'

function DptResult() {

    const status = ['Medical','AB']

    const handleAddResult = () => {
        console.log('Add Result')
    }

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
                    <div >
                        <h3 className='text-xl text-primary-txt'>345677 - Statistical Distribution - Result Sheet</h3>
                    </div>
                    <div className='mt-3 '>
                        <div className='grid grid-cols-7 gap-3'>
                            <div className=' col-span-3'>
                                <input
                                    type='text'
                                    placeholder='Enter Index Number'
                                    className='p-4 w-full h-12 border-[1px] bg-transparent border-black rounded-lg focus:border-secondary focus:border-2 focus:outline-none placeholder-table-txt placeholder-opacity-100'
                                ></input>
                            </div>
                            <div className='col-span-3'>
                                <DropDown type="Status" options={status} />
                            </div>
                            <div className='col-span-1 bg-primary'>
                                <button
                                    onClick={handleAddResult}
                                    className='w-full h-12 bg-secondary text-white border-btn-border text-[16px] border-[1px]'
                                >Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-2'>
                   <ResultTable students={students} setStudents={setStudents} user='dptSecretary' />
                </div>
                <div className='mt-4 mr-10 flex gap-3 justify-end'>
                    <button className='mt-3 py-2 px-10 bg-transperant text-black border-btn-border text-[16px] border-[1px]'>Update</button>
                    <button className='mt-3 py-2 px-10 bg-secondary text-white border-btn-border text-[16px] border-[1px]'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default DptResult
