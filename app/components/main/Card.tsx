import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
