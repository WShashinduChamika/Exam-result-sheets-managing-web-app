import React, { useState } from 'react'
import ResultSheetsCollection from '../ResultSheetsCollection'
import { useDispatch } from 'react-redux'
import { IoChevronBack } from 'react-icons/io5'
import { clickCollectionView } from '../../store/reducers/PublishedResultNavigationSlice'

function PublishedResultSheetsCollection() {
    const sheets = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
    const [faculty, setFaculty] = useState('Faculty of Computing')
    const [department, setDepartment] = useState('Computing and Information Systems')
    const [batch, setBatch] = useState('First Year')
    const [semester, setSemester] = useState('Semester 1')

    
    const dispatch = useDispatch()

    const handleBack = () => {
        dispatch(clickCollectionView(false))
    }

    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='mt-5 w-11/12 flex items-center justify-start gap-3'>
                    <IoChevronBack 
                       onClick={handleBack}
                       size={20} 
                       className='cursor-pointer' 
                    />
                    <h3 className='text-xl text-primary-txt'>Collection</h3>
                </div>
                <div className='mt-2 py-2 px-5 w-11/12 flex flex-col items-start gap-0 bg-tertiary-bg'>
                    <p>University : Sabaragamuwa University of Sri Lanka</p>
                    <p>Faculty: {faculty}</p>
                    <p>Department: {department}</p>
                    <p>Batch: {batch}</p>
                    <p>Semester: {semester}</p>
                </div>
                <ResultSheetsCollection userType="student" resultSheets={sheets} />
            </div>
        </div>
    )
}

export default PublishedResultSheetsCollection
