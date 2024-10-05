import React from 'react'
import ResultCollection from '../ResultCollection'

function ExamDptResultCollection() {
    const sheets = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='mt-10 w-11/12 flex items-center justify-start'>
                    <h3 className='text-xl text-primary-txt'>Collection</h3>
                </div>
                <ResultCollection userType="examDpt" resultSheets={sheets}/>
            </div>
        </div>
    )
}

export default ExamDptResultCollection
