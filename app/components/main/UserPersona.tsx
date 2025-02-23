import React from 'react';

function UserPersona() {
    return (
        <div className="h-full flex items-center justify-center bg-gray-200">
          <div className="max-w-xs w-full bg-blue-500 text-white rounded-2xl overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Profile"
            />
            <div className="p-4">
              <p className="font-bold">NAME: <span className="font-normal">35</span></p>
              <p className="font-bold">AGE: <span className="font-normal">Married, 2 Kids</span></p>
              <p className="font-bold">EDUCATION: <span className="font-normal">Calgary, Alberta</span></p>
              <p className="font-bold">JOB: <span className="font-normal">University of Calgary</span></p>
              <p className="font-bold">LOCATION: <span className="font-normal">Family Physician</span></p>
              <p className="font-bold">HOBBIES: <span className="font-normal">Hiking and dancing</span></p>
            </div>
          </div>
        </div>
    );
}

export default UserPersona;
