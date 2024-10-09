import React, { useEffect, useState } from 'react'
import DropDown from '../DropDown'
import { useDispatch, useSelector } from 'react-redux'
import { clickDetailsProceed } from '../../store/reducers/LectureNavigationSlice'
import data from '../../utils/data'

function DetailsForm({ setIsSetupDetails, isSetupDetails }) {

    const lectureNavigation = useSelector((store) => store.lectureNavigationSlice)
    const dispatch = useDispatch()

    var faculties = data.map((faculty) => faculty.faculty)
    const [facultyName, setFacultyName] = useState('')

    var departments = [];
    const [departmentName, setDepartmentName] = useState('')

    if (facultyName !== '') {
        const faculty = data.filter((faculty) => faculty.faculty === facultyName)
        departments = faculty[0].departments.map((dpt) => dpt.dptName)
    }

    var degrees = [];
    const [degreeName, setDegreeName] = useState('')

    if (departmentName !== '') {
        const faculty = data.filter((faculty) => faculty.faculty === facultyName)
        const department = faculty[0].departments.filter((dpt) => dpt.dptName === departmentName)
        degrees = department[0].degrees.map((degree) => degree.degreeName)
    }

    var batches = [];
    const [batchName, setBatchName] = useState('')

    if (degreeName !== '') {
        const faculty = data.filter((faculty) => faculty.faculty === facultyName)
        const department = faculty[0].departments.filter((dpt) => dpt.dptName === departmentName)
        const degree = department[0].degrees.filter((degree) => degree.degreeName === degreeName)
        batches = degree[0].batches.map((batch) => batch.batchName)
    }

    var semesters = []
    const [semesterName, setSemesterName] = useState('')

    if (batchName !== '') {
        const faculty = data.filter((faculty) => faculty.faculty === facultyName)
        const department = faculty[0].departments.filter((dpt) => dpt.dptName === departmentName)
        const degree = department[0].degrees.filter((degree) => degree.degreeName === degreeName)
        const batch = degree[0].batches.filter((batch) => batch.batchName === batchName)
        semesters = batch[0].semesters.map((semester) => semester.semesterName)
    }

    var subjects = []
    const [subjectName, setSubjectName] = useState('')
    var subjectCodes = []
    const [subjectCode, setSubjectCode] = useState('')
    const [subjectCredit, setSubjectCredit] = useState(0)

    if (semesterName !== '') {
        const faculty = data.filter((faculty) => faculty.faculty === facultyName)
        const department = faculty[0].departments.filter((dpt) => dpt.dptName === departmentName)
        const degree = department[0].degrees.filter((degree) => degree.degreeName === degreeName)
        const batch = degree[0].batches.filter((batch) => batch.batchName === batchName)
        const semester = batch[0].semesters.filter((semester) => semester.semesterName === semesterName)
        subjects = semester[0].subjects.map((subject) => subject.subjectName)
        subjectCodes = semester[0].subjects.map((subject) => subject.subjectCode)
    }




    const handleProceed = () => {
        dispatch(clickDetailsProceed(true))
    }

    useEffect(() => {
        console.log(facultyName)
        console.log(departmentName)
        console.log(degreeName)
        console.log(batchName)
        console.log(semesterName)
        console.log(subjectName)
        console.log(subjectCode)
        console.log(subjectCredit)
        if (subjectName !== '') {
            const faculty = data.find((faculty) => faculty.faculty === facultyName);
            const department = faculty.departments.find((dpt) => dpt.dptName === departmentName);
            const degree = department.degrees.find((degree) => degree.degreeName === degreeName);
            const batch = degree.batches.find((batch) => batch.batchName === batchName);
            const semester = batch.semesters.find((semester) => semester.semesterName === semesterName);
            const subject = semester.subjects.find((subject) => subject.subjectName === subjectName);
            if (subject) {
                setSubjectCredit(subject.credits);
            }
        }
    }, [facultyName, departmentName, degreeName, batchName, semesterName, subjectName, subjectCode])

    return (
        <div>
            <div className='mx-7 mt-10 flex flex-col'>
                <div>
                    <h3 className='text-xl text-txt-primary'>Enter Details</h3>
                </div>
                <div className='m-10 grid grid-cols-2 gap-5'>
                    <DropDown type="Faculty Name" options={faculties} setValue={setFacultyName} />
                    <DropDown type="Department Name" options={departments} setValue={setDepartmentName} />
                    <DropDown type="Degree Name" options={degrees} setValue={setDegreeName} />
                    <DropDown type="Batch Name" options={batches} setValue={setBatchName} />
                    <DropDown type="Semester Name" options={semesters} setValue={setSemesterName} />
                    <div>
                        <input type='date' placeholder='Month' className='p-4 w-full h-12 border-[1px] border-black rounded-lg focus:border-secondary focus:border-2 active:border-white duration-300'></input>
                    </div>
                    <DropDown type="Subject Name" options={subjects} setValue={setSubjectName} />
                    <DropDown type="Subject Code" options={subjectCodes} setValue={setSubjectCode} />
                    <div>
                        <div className='p-4 w-full h-12 flex items-center justify-between border-[1px] border-black rounded-lg focus:border-secondary focus:border-2 active:border-white duration-300'>
                            <p>Number of Credits</p>
                            <p className='text-lg'>{subjectCredit}</p>
                        </div>
                    </div>
                </div>
                <div className='mx-10 mt-5 flex justify-end gap-10'>
                    <button className='min-w-36 h-12 hover:bg-secondary text-black hover:text-white text-[16px] border-black hover:border-btn-border border-[1px]'>Cancel</button>
                    <button
                        onClick={handleProceed}
                        className='min-w-36 h-12 bg-secondary text-white border-btn-border text-[16px] border-[1px]'
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailsForm
