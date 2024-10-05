import React from 'react'
import SideNavBar from '../components/SideNavBar'
import TopVerticalBar from '../components/TopVerticalBar'

function ExamDepartmentPage() {
    return (
        <div className='w-screen'>
            <div className='grid grid-cols-5 gap-0'>
                <div className='col-span-1 h-screen'>
                    <SideNavBar userType='dptSecretary' />
                </div>
                <div className='col-span-4 flex flex-col'>
                    <TopVerticalBar />
                    <div className='mt-14'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExamDepartmentPage
