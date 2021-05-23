import React from 'react'

const UserBox = () => {
    return (
        <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
            <img src="https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg" alt="Profile"
            className="w-11 h-11 rounded-full"
            />
            <div className="flex flex-col">
                <span className="font-bold text-md text-black">John Doe</span>
                <span className="text-sm text-gray-dark">@johndoe</span>
            </div>
            <div className="flex space-x-1">
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
            </div>
        </div>
    )
}

export default UserBox
