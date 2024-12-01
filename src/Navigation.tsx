import React from 'react';

const navItems = ['НОВОЕ', 'ФУТБОЛКИ', 'НАКЛЕЙКИ', 'ИНФО', 'ССЫЛКИ'];

export const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap justify-center gap-4 my-6">
      {navItems.map((item) => (
        <a
          key={item}
          href="#"
          className="px-4 py-2 border border-gray-200 rounded hover:bg-gray-100 transition-colors duration-300"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};