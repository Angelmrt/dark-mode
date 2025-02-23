import React from 'react';
import Card from './Card';

function CardWrapper() {
    return (
        <div className="flex-1 h-full flex flex-col justify-center bg-gray-200 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <Card title="Bio">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet mauris enim...</p>
            </Card>
            <Card title="Personality">
              <ul className="list-disc pl-5">
                <li>Hardworking</li>
                <li>Smart</li>
                <li>Expressive</li>
                <li>Thoughtful</li>
              </ul>
            </Card>
            <Card title="Pain points">
              <ul className="list-disc pl-5">
                <li>Lorem ipsum dolor sit amet, fgfew consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, fgfew consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, fgfew consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, fgfew consectetur adipiscing elit.</li>
              </ul>
            </Card>
            <Card title="Goals">
              <ul className="list-disc pl-5">
                <li>Lorem ipsum dolor sit amet, fgfew consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, fgfew consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, fgfew consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, fgfew consectetur adipiscing elit.</li>
              </ul>
            </Card>
          </div>
        </div>
    );
}

export default CardWrapper;
