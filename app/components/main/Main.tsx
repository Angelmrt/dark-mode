import React from 'react';
import UserPersona from './UserPersona';
import CardWrapper from './CardWrapper';

function Main() {
  return (
    <main className="h-screen">
      <div className="flex flex-row items-stretch justify-center gap-4 p-4 bg-gray-100 h-full">
        {/* UserPersona ocupa el 40% */}
        <div className="w-2/5 h-full">
          <UserPersona />
        </div>

        {/* CardWrapper ocupa el 60% */}
        <div className="w-3/5 h-full">
          <CardWrapper />
        </div>
      </div>
    </main>
  );
}

export default Main;
