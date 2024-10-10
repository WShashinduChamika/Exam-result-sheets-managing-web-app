//Added new content (This does not need since it for approval rejected results)
import React from 'react'
import ResultSheetList from '../ResultSheetList'

function LectureNotApprovedResultList() {
    const resultSheets = ['shhet1', 'sheet2', 'sheet3', 'sheet4', 'sheet5', 'sheet6', 'sheet7', 'sheet8', 'sheet9', 'sheet10', 'shwet11', 'sheet12', 'sheet13', 'sheet14', 'sheet15', 'sheet16', 'sheet17', 'sheet18', 'sheet19', 'sheet20']

    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='mt-3 w-5/6 flex items-center justify-between'>
                    <h3 className='text-xl text-primary-txt'>Not Approve Results</h3>
                </div>
                <div className='w-full flex justify-start'>
                    <div className='ml-20 mt-3 px-8 py-2 flex items-center justify-center bg-approval-btn-bg'>Not Approved</div>
                </div>
                <ResultSheetList userType="dptSecretary" view="notApproved"  resultSheets={resultSheets} />
            </div>
        </div>
    )
}

export default LectureNotApprovedResultList
//