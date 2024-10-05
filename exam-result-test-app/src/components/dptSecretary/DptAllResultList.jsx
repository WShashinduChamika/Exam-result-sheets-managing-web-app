import React, { useEffect, useState } from 'react'
import ResultSheetList from '../ResultSheetList'
import DropDown from '../DropDown'
import { TfiMenuAlt } from "react-icons/tfi";
import { PiSquaresFourBold } from "react-icons/pi";
import data from '../../utils/data';

function DptAllResultList() {

    const resultSheets = ['shhet1', 'sheet2', 'sheet3', 'sheet4', 'sheet5', 'sheet6', 'sheet7', 'sheet8', 'sheet9', 'sheet10', 'shwet11', 'sheet12', 'sheet13', 'sheet14', 'sheet15', 'sheet16', 'sheet17', 'sheet18', 'sheet19', 'sheet20']
    const faculties = data.map((faculty) => faculty.faculty);
    const [facultyName, setFacultyName] = useState('');


    const [departments, setDepartments] = useState([]);
    const [departmentName, setDepartmentName] = useState('');


    const [subjects, setSubjects] = useState([]);
    const [subjectName, setSubjectName] = useState('');


    useEffect(() => {
        if (facultyName !== '') {
            const selectedFaculty = data.find((faculty) => faculty.faculty === facultyName);
            setDepartments(selectedFaculty ? selectedFaculty.departments.map((dpt) => dpt.dptName) : []);
            setDepartmentName('');
        }
    }, [facultyName]);


    useEffect(() => {
        if (departmentName !== '') {
            const selectedFaculty = data.find((faculty) => faculty.faculty === facultyName);
            const selectedDepartment = selectedFaculty.departments.find((dpt) => dpt.dptName === departmentName);


            let allSubjects = [];
            selectedDepartment.degrees.forEach((degree) => {
                degree.batches.forEach((batch) => {
                    batch.semesters.forEach((semester) => {
                        allSubjects = [...allSubjects, ...semester.subjects.map((subject) => subject.subjectName)];
                    });
                });
            });

            setSubjects(allSubjects);
            setSubjectName('');
        }
    }, [departmentName]);

    const handleSort = () => {
        const filterDetails = {
            faculty: facultyName,
            department: departmentName,
            subject: subjectName
        }
        console.log(filterDetails)
    }

    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='mt-7 w-11/12 flex items-center justify-between'>
                    <h3 className='text-xl text-primary-txt'>Approve Pending Result</h3>
                    <div className='basis-9/12 grid grid-cols-7 gap-2'>
                        <div className='col-span-2'>
                            <DropDown dropDownType="resultList" type="Faculty" options={faculties} setValue={setFacultyName} />
                        </div>
                        <div className='col-span-2'>
                            <DropDown dropDownType="resultList" type="Department" options={departments} setValue={setDepartmentName} />
                        </div>
                        <div className='col-span-2'>
                            <DropDown dropDownType="resultList" type="Subject" options={subjects} setValue={setSubjectName} />
                        </div>
                        <div
                            onClick={handleSort}
                            className='col-span-1 flex items-center justify-center gap-2 bg-secondary rounded-lg cursor-pointer'>
                            <TfiMenuAlt size={25} color='white' />
                            <PiSquaresFourBold size={25} color='white' />
                        </div>
                    </div>
                </div>
                <ResultSheetList userType="dptSecretary" resultSheets={resultSheets} />
            </div>
        </div>
    )
}

export default DptAllResultList
