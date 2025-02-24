import React from 'react';

function UserPersona() {
    return (
        <div className="h-full flex items-center justify-center">
          <div className="max-w-xs w-full bg-body-bg dark:bg-bodyDARK-bg text-primary dark:text-primaryDARK rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
            <img
              className="w-full h-48 object-cover"
              src="../../public/foto.png"
              alt="Profile"
            />
            <div className="p-4 flex-1">
              <p className="font-bold mb-2">NAME: <span className="font-normal">35</span></p>
              <p className="font-bold mb-2">AGE: <span className="font-normal">Married, 2 Kids</span></p>
              <p className="font-bold mb-2">EDUCATION: <span className="font-normal">Calgary, Alberta</span></p>
              <p className="font-bold mb-2">JOB: <span className="font-normal">University of Calgary</span></p>
              <p className="font-bold mb-2">LOCATION: <span className="font-normal">Family Physician</span></p>
              <p className="font-bold">HOBBIES: <span className="font-normal">Hiking and dancing</span></p>
            </div>
          </div>
        </div>
    );
}

export default UserPersona;
