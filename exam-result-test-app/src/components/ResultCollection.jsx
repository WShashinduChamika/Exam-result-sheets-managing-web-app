import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deanClickApprovedCollectionView, deanClickCollectionView, deanClickViewResult } from '../store/reducers/DeanNavigationSlice'
import { examDepartmentClickApprovedCollectionView, examDepartmentClickCollectionView, examDepartmentClickResultSheetsCollectionView } from '../store/reducers/ExamDptNavigationSlice'
import { registarClickApprovedCollectionView, registarClickCollectionView } from '../store/reducers/RegistarNavigationSlice'
import { vcClickApprovedCollectionView, vcClickCollectionView } from '../store/reducers/VCNavigationSlice'
import { FaFileDownload } from "react-icons/fa";

function ResultCollection({ userType, resultSheets }) {
    const [resultSheetList, setResulSheeetList] = useState(resultSheets)

    const deanNavigation = useSelector((store) => store.deanNavigationSlice)
    const examDptNavigation = useSelector((store) => store.examDptNavigationSlice)
    const registrarNavigation = useSelector((store) => store.registarNavigationSlice)
    const vcNavigation = useSelector((store) => store.vcNavigationSlice)

    const dispatch = useDispatch()

    const handleViewResult = () => {

        if (userType === 'dean') {
            if (!deanNavigation.isClickedViewResult) {
                dispatch(deanClickViewResult(true))
            }
            if (!deanNavigation.isClickedCollectionView) {
                dispatch(deanClickCollectionView(true))
            }
            if (!deanNavigation.isClickedApprovedCollectionView) {
                dispatch(deanClickApprovedCollectionView(true))
            }
        }

        if (userType === 'examDpt') {
            if (!examDptNavigation.isClickedCollectionView) {
                dispatch(examDepartmentClickCollectionView(true))
            }
            if (!examDptNavigation.isClickedApprovedCollectionView) {
                dispatch(examDepartmentClickApprovedCollectionView(true))
            }
        }

        if (userType === 'registar') {
            if (!registrarNavigation.isClickedCollectionView) {
                dispatch(registarClickCollectionView(true))
            }
            if (!registrarNavigation.isClickedApprovedCollectionView) {
                dispatch(registarClickApprovedCollectionView(true))
            }
        }

        if (userType === 'vc') {
            if (!vcNavigation.isClickedCollectionView) {
                dispatch(vcClickCollectionView(true))
            }
            if (!vcNavigation.isClickedApprovedCollectionView) {
                dispatch(vcClickApprovedCollectionView(true))
            }
        }
    }

    return (
        <div className='w-11/12'>
            <div className='mt-8'>
                <div className='pb-2 w-full grid grid-cols-12 gap-1 border-black border-b-[1px]'>
                    {
                        userType !== 'dean' ?
                            <div className='h-10 col-span-2 flex items-center justify-center'>
                                <p className='text-lg text-black'>Faculty</p>
                            </div> : <></>
                    }
                    <div className='h-10 col-span-3 flex items-center justify-center'>
                        <p className='text-lg text-black'>Department</p>
                    </div>
                    <div className='h-10 col-span-4 flex items-center justify-center'>
                        <p className='text-lg text-primary-txt'>Degree</p>
                    </div>
                    <div className='h-10 col-span-1 flex items-center justify-center'>
                        <p className='text-lg text-black'>Batch</p>
                    </div>
                    <div className={`h-10 ${userType !== 'dean' ? "col-spane-1" : "col-span-2"} flex items-center justify-center`}>
                        <p className='text-lg text-black'>Semester</p>
                    </div>
                    <div className={`h-10 ${userType !== 'dean' ? "col-spane-1" : "col-span-2"} flex items-center justify-center`}>
                        <p className='text-lg text-black'>Action</p>
                    </div>
                </div>
            </div>
            <div className='mb-10 max-h-80 overflow-y-auto scrollbar-hide'>
                {resultSheetList.map((sheet, index) => (
                    <div key={index} className='py-2 w-full grid grid-cols-12 gap-1 gradient-border-bottom border-b-[1px]'>
                        {
                            userType !== 'dean' ?
                                <div className='col-span-3 flex items-center justify-center'>
                                    <p className='py-2 text-[16px] text-black'>Faculty of Computing</p>
                                </div> : <></>
                        }
                        <div className='col-span-3 flex items-center justify-center'>
                            <p className='py-2 text-[16px] text-black'>Computing and Information System</p>
                        </div>
                        <div className={`${userType !== `dean` ? "col-span-3" : "col-span-4"} flex items-center justify-center`}>
                            <p className='py-2 text-[16px] text-primary-txt'>Bsc.(Hons) Computing and Information System</p>
                        </div>
                        <div className={`${userType !== `dean` ? "col-span-1" : "col-span-2"} flex items-center justify-center`}>
                            <p className='py-2 text-[16px] text-black'>20</p>
                        </div>
                        <div className={`${userType !== `dean` ? "col-span-1" : "col-span-2"} flex items-center justify-center`}>
                            <p className='text-[16px] text-black'>1</p>
                        </div>
                        <div className={`py-2 ${userType !== `dean` ? "col-span-1" : "col-span-2"} flex items-center justify-center gap-3`}>
                            <button
                                onClick={handleViewResult}
                                className={`py-1 ${vcNavigation.isApprovedResult && userType === 'examDpt'? "px-2 text-[12px]":"px-4 text-[14px]"} flex itmes-center justify-center bg-view-btn-bg text-black  rounded-3xl`}
                            >
                                View
                            </button>
                            {
                                vcNavigation.isApprovedResult && userType === 'examDpt'?
                                    <div className='cursor-pointer'>
                                        <FaFileDownload color='#0052CC' size={25} />
                                    </div>
                                    : <></>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResultCollection
