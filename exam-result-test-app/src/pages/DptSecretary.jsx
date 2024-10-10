import React from 'react'
import SideNavBar from '../components/SideNavBar'
import TopVerticalBar from '../components/TopVerticalBar'
import { useSelector } from 'react-redux'
import DptAllResultList from '../components/dptSecretary/DptAllResultList'
import DptResult from '../components/dptSecretary/DptResult'
import DptApprovedResult from '../components/dptSecretary/DptApprovedResult'
import DptApprovedResultList from '../components/dptSecretary/DptApprovedResultList'
import LectureNotApprovedResultList from '../components/dptSecretary/LectureNotApprovedResultList'
import LectureNotApprovedResult from '../components/dptSecretary/LectureNotApprovedResult'

function DptSecretary() {

    const dptSecretaryNavigations = useSelector((store) => store.dptSecretaryNavigationSlice)

    return (
        <div className='w-screen'>
            <div className='grid grid-cols-5 gap-0'>
                <div className='col-span-1 h-screen'>
                    <SideNavBar userType='dptSecretary' />
                </div>
                <div className='col-span-4 flex flex-col'>
                    <TopVerticalBar />
                    <div className='mt-14'>
                        {
                            dptSecretaryNavigations.isClickedAllResults ?
                                dptSecretaryNavigations.isClickedViewResult ?
                                    <DptResult /> : <DptAllResultList />
                                : <></>
                        }
                        {
                            dptSecretaryNavigations.isClickedHistory ?
                                dptSecretaryNavigations.isClickedApprovedResultView ?
                                    <DptApprovedResult /> : <DptApprovedResultList />
                                : <></>
                        }
                        {/* Added new content (This does not need since it is for approval rejected results) */}
                        {
                            dptSecretaryNavigations.isClickedNotApprovedResults?
                               dptSecretaryNavigations.isClickedNotApprovedResultView?
                                 <LectureNotApprovedResult /> : <LectureNotApprovedResultList />
                                 : <></>
                        }
                        {/* // */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DptSecretary
