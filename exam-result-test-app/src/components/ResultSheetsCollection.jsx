import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deanClickApprovedCollectionView, deanClickApprovedResultSheetsCollectionView, deanClickCollectionView, deanClickResultSheetsCollectionView } from '../store/reducers/DeanNavigationSlice'
import { examDepartmentClickApprovedResultSheetsCollectionView, examDepartmentClickResultSheetsCollectionView } from '../store/reducers/ExamDptNavigationSlice'
import { registarClickApprovedResultSheetsCollectionView, registarClickResultSheetsCollectionView } from '../store/reducers/RegistarNavigationSlice'
import { vcClickApprovedResultSheetsCollectionView, vcClickResultSheetsCollectionView } from '../store/reducers/VCNavigationSlice'
import { clickResultSheetsCollectionView } from '../store/reducers/PublishedResultNavigationSlice'

function ResultSheetsCollection({userType,resultSheets}) {

    const [resultSheetList, setResulSheeetList] = useState(resultSheets)

    const deanNavigation = useSelector((store) => store.deanNavigationSlice)
    const examDptNavigation = useSelector((store) => store.examDptNavigationSlice)
    const registrarNavigation = useSelector((store) => store.registarNavigationSlice)
    const vcNavigation = useSelector((store)=>store.vcNavigationSlice)
    const publishedResultNavigation = useSelector((store) => store.publishedResultNavigationSlice)

    const dispatch = useDispatch()

    const handleViewResult = () => {
        
        if (userType === 'dean') {
            if (!deanNavigation.isClickedViewResult) {
                dispatch(deanClickViewResult(true))
            }
            if(!deanNavigation.isClickedResultSheetsCollectionView){
                dispatch(deanClickResultSheetsCollectionView(true))
            }
            if(!deanNavigation. isClickedApprovedResultSheetsCollectionView){
                dispatch(deanClickApprovedResultSheetsCollectionView(true))
            }
        }

        if (userType === 'examDpt') {
            if (!examDptNavigation.isClickedResultSheetsCollectionView) {
                dispatch(examDepartmentClickResultSheetsCollectionView(true))
            }
            if(!examDptNavigation.isClickedApprovedResultSheetsCollectionView){
                dispatch(examDepartmentClickApprovedResultSheetsCollectionView(true))
            }
        }

        if(userType === 'registar') {
            if(!registrarNavigation.isClickedResultSheetsCollectionView) {
                dispatch(registarClickResultSheetsCollectionView(true))
            }
            if(!registrarNavigation.isClickedApprovedResultSheetsCollectionView){
                dispatch(registarClickApprovedResultSheetsCollectionView(true))
            }
        }
        
        if(userType === 'vc'){
            if(!vcNavigation.isClickedResultSheetsCollectionView){
                dispatch(vcClickResultSheetsCollectionView(true))
            }
            if(!vcNavigation.isClickedApprovedResultSheetsCollectionView){
                dispatch(vcClickApprovedResultSheetsCollectionView(true))
            }
        }

        if(userType === 'student'){
            if(!publishedResultNavigation.isClickedResultSheetsCollectionView){
                dispatch(clickResultSheetsCollectionView(true))
            }
        }

    }

    return (
        <div className='w-11/12'>
            <div className='mt-4'>
                <div className='pb-2 w-full grid grid-cols-12 gap-1 border-black border-b-[1px]'>
                    <div className='h-10 col-span-4 flex items-center justify-center'>
                        <p className='text-lg text-black'>Subject Code</p>
                    </div>
                    <div className='ml-10 h-10 col-span-6 flex items-center justify-start'>
                        <p className='text-lg text-primary-txt'>Subject</p>
                    </div>
                    <div className='h-10 col-span-2 flex items-center justify-center'>
                        <p className='text-lg text-black'>Action</p>
                    </div>
                </div>
            </div>
            <div className='mb-10 max-h-48 overflow-y-auto scrollbar-hide'>
                {resultSheetList.map((sheet, index) => (
                    //Added new content here
                    <div key={index} className='py-2 w-full grid grid-cols-12 gap-1 border-b-[1px]'>
                      {/* //  */}
                        <div className='col-span-4 flex items-center justify-center'>
                            <p className='py-2 text-[16px] text-black'>IS1101</p>
                        </div>
                        <div className='col-span-6 flex items-center justify-start'>
                            <p className='py-2 text-[16px] text-primary-txt'>Fundamentals of Information System</p>
                        </div>
                        <div className='py-2 col-span-2 flex items-center justify-center gap-3'>
                            <button
                                onClick={handleViewResult}
                                className='py-1 px-4 flex itmes-center justify-center bg-view-btn-bg text-black text-[14px] rounded-3xl'
                            >
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default ResultSheetsCollection
