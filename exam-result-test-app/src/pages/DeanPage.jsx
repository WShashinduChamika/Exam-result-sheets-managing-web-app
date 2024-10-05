import React from 'react'
import SideNavBar from '../components/SideNavBar'
import TopVerticalBar from '../components/TopVerticalBar'
import DeanAllResultList from '../components/dean/DeanAllResultList'
import DeanResult from '../components/dean/DeanResult'
import { useSelector } from 'react-redux'
import DeanApprovedResultList from '../components/dean/DeanApprovedResultList'
import DeanResultCollection from '../components/dean/DeanResultCollection'
import DeanResultSheetsCollection from '../components/dean/DeanResultSheetsCollection'
import DeanResultCollectionResult from '../components/dean/DeanResultCollectionResult'
import DeanApprovedResult from '../components/dean/DeanApprovedResult'

function DeanPage() {

    const deanNavigation = useSelector((state) => state.deanNavigationSlice)
    return (
        <div className='w-screen'>
            <div className='grid grid-cols-5 gap-0'>
                <div className='col-span-1 h-screen'>
                    <SideNavBar userType='dean' />
                </div>
                <div className='col-span-4 flex flex-col'>
                    <TopVerticalBar />
                    <div className='mt-14'>
                        {
                            deanNavigation.isClickedAllReultSheets ?
                                !deanNavigation.isClickedViewResult ?
                                    <DeanAllResultList /> : <DeanResult />
                                : <></>
                        }
                        {
                            deanNavigation.isClickedHistory ?
                                deanNavigation.isClickedApprovedResultView ?
                                    <DeanApprovedResult /> : <DeanApprovedResultList />
                                : <></>
                        }
                        {
                            deanNavigation.isClickedCollection ?
                                deanNavigation.isClickedCollectionView ?
                                    deanNavigation.isClickedResultSheetsCollectionView ?
                                        <DeanResultCollectionResult /> : <DeanResultSheetsCollection />
                                    : <DeanResultCollection />
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeanPage
