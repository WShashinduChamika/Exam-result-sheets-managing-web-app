import React, { useState, useEffect } from 'react';
import DropDown from '../DropDown';
import { TfiMenuAlt } from "react-icons/tfi";
import { PiSquaresFourBold } from "react-icons/pi";
import data from '../../utils/data';
import ResultCollection from '../ResultCollection'

function PublishedResultCollection() {
    const sheets = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
    const faculties = data.map((faculty) => faculty.faculty);
    const [facultyName, setFacultyName] = useState('');


    const [departments, setDepartments] = useState([]);
    const [departmentName, setDepartmentName] = useState('');


    const [degrees, setDegrees] = useState([]);
    const [degreeName, setDegreeName] = useState('');


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


            const allDegrees = selectedDepartment.degrees.map((degree) => degree.degreeName);

            setDegrees(allDegrees);
            setDegreeName('');
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
                <div className='mt-10 w-11/12 flex items-center justify-between'>
                    <h3 className='text-xl text-primary-txt'>Published Results</h3>
                    <div className='basis-9/12 grid grid-cols-7 gap-2'>
                        <div className='col-span-2'>
                            <DropDown dropDownType="resultList" type="Faculty" options={faculties} setValue={setFacultyName} />
                        </div>
                        <div className='col-span-2'>
                            <DropDown dropDownType="resultList" type="Department" options={departments} setValue={setDepartmentName} />
                        </div>
                        <div className='col-span-2'>
                            <DropDown dropDownType="resultList" type="Degree" options={degrees} setValue={setDegreeName} />
                        </div>
                        <div
                            onClick={handleSort}
                            className='col-span-1 flex items-center justify-center gap-2 bg-secondary rounded-lg cursor-pointer'>
                            <TfiMenuAlt size={25} color='white' />
                            <PiSquaresFourBold size={25} color='white' />
                        </div>
                    </div>
                </div>
                <ResultCollection userType="student" resultSheets={sheets}/>
            </div>
        </div>
    )
}

export default PublishedResultCollection
