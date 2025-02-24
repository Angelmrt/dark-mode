import React from 'react';
import UserPersona from './UserPersona';
import CardWrapper from './CardWrapper';

function Main() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col md:flex-row items-stretch justify-center bg-body-bg dark:bg-bodyDARK-bg p-5">
        <div className="w-full md:w-2/5">
          <UserPersona />
        </div>

        <div className="w-full md:w-3/5">
          <CardWrapper />
        </div>
      </div>
    </main>
  );
}

export default Main;
