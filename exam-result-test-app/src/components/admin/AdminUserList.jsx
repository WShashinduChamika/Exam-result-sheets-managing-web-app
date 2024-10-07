import React, { useEffect, useState } from 'react';
import UserList from '../UserList';

function AdminUserList() {
    const [users] = useState([
        {
            id: '19APC3955',
            name: 'Shashindu',
            role: 'student'
        },
        {
            id: '19SE3956',
            name: 'Shashindu',
            role: 'student'
        },
        {
            id: '19APC3951',
            name: 'Shashindu',
            role: 'student'
        },
        {
            id: '19SE3952',
            name: 'Shashindu',
            role: 'student'
        }
    ]);

    const [searchId, setSearchId] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearchId(searchValue);

        // Filter users by ID based on search input
        const newFilteredUsers = users.filter((user) =>
            user.id.toLowerCase().includes(searchValue.toLowerCase())
        );
        
        setFilteredUsers(newFilteredUsers);
    };

    useEffect(() => {
        // If you need any side effects when searchId changes, you can add them here.
    }, [searchId]);

    return (
        <div className='mt-5 w-full'>
            <div className='flex w-full flex-col items-center'>
                <div className='mt-3 w-5/6 flex items-center justify-between'>
                    <h3 className='text-2xl text-primary-txt font-semibold'>User List</h3>
                    <div className='mt-4 mb-6'>
                        <input
                            type='text'
                            value={searchId}
                            onChange={handleSearchChange}
                            placeholder='Search by User ID'
                            className='p-2 border border-gray-400 rounded-md w-full'
                        />
                    </div>
                </div>
                <UserList users={filteredUsers} />
            </div>
        </div>
    );
}

export default AdminUserList;