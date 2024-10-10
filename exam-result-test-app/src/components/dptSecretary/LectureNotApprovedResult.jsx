//Added new content (This does not need since it for approval rejected results)
import React, { useState } from 'react'
import ResultTable from '../ResultTable'
import DropDown from '../DropDown'
import { FaComment, FaCommentSlash } from 'react-icons/fa6';

function LectureNotApprovedResult() {
    const status = ['Medical', 'AB']

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
    
    const [showComment, setShowComment] = useState(false)
    const [comment, setComment] = useState('There is issue with absent status of two students. The index numbers of them are respectively 19APC3855 and 19APC4022. So, Please correct those details with correct data.')
    const handleViewReason = () => {
        setShowComment(!showComment)
    }

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
                <div className='mt-7 mx-10 flex gap-3 justify-between'>
                    <div
                        onClick={handleViewReason}
                        className='flex gap-3 cursor-pointer'
                    >
                       {!showComment ? <FaComment className='text-2xl text-secondary' /> : <FaCommentSlash className='text-2xl text-secondary' />}
                       {!showComment ? <p className='text-secondary text-lg'>View Reason</p> : <p className='text-secondary text-lg'>Hide Reason</p>}
                    </div>
                    <div className='flex gap-3'>
                        <button className='mt-3 py-2 px-10 bg-transperant hover:bg-secondary hover:text-white text-black border-btn-border text-[16px] border-[1px]'>Update</button>
                        <button className='mt-3 py-2 px-10 bg-secondary text-white border-btn-border text-[16px] border-[1px]'>Send</button>
                    </div>
                </div>
            </div>
            {
                showComment && <div className='fixed top-72 left-72 flex items-center'>
                    <div className='mt-5 ml-8 py-10 w-5/12 flex flex-col items-center bg-white border-[1px] border-black rounded-lg'>
                        <h2 className='w-5/6 text-center text-2xl font-semibold text-primary-txt'>The Reason To Not Approve</h2>
                        <p className='w-5/6 mt-5 text-justify text-sm text-black'>{comment}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default LectureNotApprovedResult
//