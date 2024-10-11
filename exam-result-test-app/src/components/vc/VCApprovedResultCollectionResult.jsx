import React, { useState } from 'react'
import ResultTable from '../ResultTable'
import { useDispatch } from 'react-redux'
import { IoChevronBack } from 'react-icons/io5'
import { vcClickApprovedResultSheetsCollectionView } from '../../store/reducers/VCNavigationSlice'
import ResultTable2 from '../ResultTable2'

function VCApprovedResultCollectionResult() {
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

const dispatch = useDispatch()

const handleBack = () => {
   dispatch(vcClickApprovedResultSheetsCollectionView(false))
}

return (

    <div>
        <div className='mt-5 w-full flex flex-col items-center'>
            <div className='w-10/12 flex flex-col items-start'>
                <div className='mt-5 w-11/12 flex items-center justify-start gap-3' >
                <IoChevronBack 
                   onClick={handleBack}
                   size={20} 
                   className='cursor-pointer' 
                />
                    <h3 className='text-xl text-primary-txt'>IS1101 - Fundamentals of Information Systems</h3>
                </div>
            </div>
            <div className='mt-5 w-full'>
                <ResultTable2 students={students} setStudents={setStudents} user='vc' />
            </div>
        </div>
    </div>
)
}

export default VCApprovedResultCollectionResult
