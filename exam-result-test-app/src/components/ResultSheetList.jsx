import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clickApprovalRequestView, clickHistoryView, clickViewResult } from '../store/reducers/LectureNavigationSlice'
import { dptClickApprovedResultView, dptClickNotApprovedResultView, dptClickViewResult } from '../store/reducers/DptSecretaryNavigationSlice';
import { hodClickApprovedResultView, hodClickViewResult } from '../store/reducers/HODNavigationSlice';
import { deanClickApprovedResultView, deanClickViewResult } from '../store/reducers/DeanNavigationSlice';


function ResultSheetList({ userType, resultSheets, view }) {

    const [resultSheetList, setResulSheeetList] = useState(resultSheets)
    
    //added new content here
    const [approveStatus,setApproveStatus] = useState('')
    //

    const lectureNavigation = useSelector((store) => store.lectureNavigationSlice)
    const dptSecretaryNavigation = useSelector((store) => store.dptSecretaryNavigationSlice)
    const hodNavigation = useSelector((store) => store.hodNavigationSlice)
    const deanNavigation = useSelector((store) => store.deanNavigationSlice)

    const dispatch = useDispatch()

    const handleViewResult = () => {
        if (userType === 'lecture') {
            if (!lectureNavigation.isclickedViewResult) {
                dispatch(clickViewResult(true))
            }
            if (!lectureNavigation.isClickedApprovalRequestView) {
                dispatch(clickApprovalRequestView(true))
            }
            if(!lectureNavigation.isClickedHistoryView){
                dispatch(clickHistoryView(true))
            }
        } else if (userType === 'dptSecretary') {
            if (!dptSecretaryNavigation.isClickedViewResult) {
                dispatch(dptClickViewResult(true))
            }
            if(!dptSecretaryNavigation.isClickedApprovedResultView){
                dispatch(dptClickApprovedResultView(true))
            }
            //Added new content here
            if(!dptSecretaryNavigation.isClickedNotApprovedResultView){
                dispatch(dptClickNotApprovedResultView(true))
            }
            //
        } else if (userType === 'HOD') {
            if (!hodNavigation.isClickedViewResult) {
                dispatch(hodClickViewResult(true))
            }
            if(!hodNavigation.isClickedApprovedResultView){
                dispatch(hodClickApprovedResultView(true))
            }
        }
        else if (userType === 'dean') {
            if (!deanNavigation.isClickedViewResult) {
                dispatch(deanClickViewResult(true))
            }
            if(!deanNavigation.isClickedApprovedResultView){
                dispatch(deanClickApprovedResultView(true))
            }
        }
    }

    return (
        <div>
            <div className='mt-8'>
                <div className='pb-2 w-full grid grid-cols-12 gap-1 border-black border-b-[1px]'>
                    {/* {
                        listType === 'approved' ?
                            <div className='h-10 col-span-1 flex items-center justify-start'>
                                <input type='checkbox' className='w-5 h-5'></input>
                            </div>
                            : <></>
                    } */}
                    <div className='h-10 col-span-2 flex items-center justify-start'>
                        <p className='text-lg text-black'>Subject Code</p>
                    </div>
                    <div className='h-10 col-span-3 flex items-center justify-start'>
                        <p className='ml-5 text-lg text-primary-txt'>Subject Name</p>
                    </div>
                    <div className='h-10 col-span-3 flex items-center justify-start'>
                        <p className='ml-3 text-lg text-black'>Faculty</p>
                    </div>
                    <div className='h-10 col-span-3 flex items-center justify-start'>
                        <p className='ml-2 text-lg text-black'>Department</p>
                    </div>
                    <div className='h-10 col-span-1 flex items-center justify-start'>
                        <p className='text-lg text-black'>Action</p>
                    </div>
                </div>
            </div>
            <div className='mb-10 max-h-80 overflow-y-auto scrollbar-hide'>
                {resultSheetList.map((sheet, index) => (
                    <div key={index} className='py-2 w-full grid grid-cols-12 gap-1 gradient-border-bottom border-b-[1px]'>
                        {/* {
                            listType === "approved" ?
                                <div className='h-10 col-span-1 flex items-center justify-start'>
                                    <input type='checkbox' className='w-5 h-5'></input>
                                </div> :
                                <></>
                        } */}
                        <div className='h-10 col-span-2 flex items-center justify-start'>
                            <p className='ml-5 text-lg text-black'>741D</p>
                        </div>
                        <div className='h-10 col-span-3 flex items-center justify-start'>
                            <p className='text-lg text-primary-txt'>Static Distribution</p>
                        </div>
                        <div className='h-10 col-span-3 flex items-center justify-start'>
                            <p className='text-lg text-black'>Information T</p>
                        </div>
                        <div className='h-10 col-span-3 flex items-center justify-start'>
                            <p className='text-lg text-black'>Computer Science</p>
                        </div>
                        <div className='h-10 col-span-1 flex items-center justify-center gap-3'>
                            {/* Added new content here */}
                            <button
                                onClick={handleViewResult}
                                className={`py-1 px-4 flex itmes-center justify-center 
                                    ${approveStatus === 'lecture'? "bg-red-400": approveStatus === 'dptSecretary'?"bg-yellow-200":"bg-view-btn-bg"} 
                                    text-black text-[14px] rounded-3xl`}
                            >
                                View
                            </button>
                            {/* // */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResultSheetList
