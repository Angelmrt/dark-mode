import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="text-white p-4 rounded-lg shadow-lg h-full flex flex-col  bg-card-bg dark:bg-cardDARK-bg">
      <h2 className="text-xl font-bold mb-2 text-card-h2 dark:text-cardDARK-h2">{title}</h2>
      <div className="flex-1 text-card-paragraph dark:text-cardDARK-paragraph">{children}</div>
    </div>
  );
};

export default Card;
