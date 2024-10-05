import React from 'react'
import ResultSheetList from '../ResultSheetList';
import { useDispatch, useSelector } from 'react-redux';

function HODApprovedResultList() {

    const lectureNavigation = useSelector((store) => store.lectureNavigationSlice)
    const dispatch = useDispatch()

    const resultSheets = ['shhet1', 'sheet2', 'sheet3', 'sheet4', 'sheet5', 'sheet6', 'sheet7', 'sheet8', 'sheet9', 'sheet10', 'shwet11', 'sheet12', 'sheet13', 'sheet14', 'sheet15', 'sheet16', 'sheet17', 'sheet18', 'sheet19', 'sheet20']

    const handleViewResult = () => {
        if (lectureNavigation.isClickedApprovalPendingResults) {
            dispatch(clickViewResult(true))
        }
    }

    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='mt-3 w-5/6 flex items-center justify-between'>
                    <h3 className='text-xl text-primary-txt'>History</h3>
                </div>
                <div className='w-full flex justify-start'>
                    <div className='ml-20 mt-3 px-8 py-2 flex items-center justify-center bg-approval-btn-bg'>Approved</div>
                </div>
                <ResultSheetList userType="HOD" resultSheets={resultSheets} />
            </div>
        </div>
    )
}

export default HODApprovedResultList
