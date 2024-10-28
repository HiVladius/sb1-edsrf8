import React from 'react';
import { Outlet } from 'react-router-dom';
import BusinessNavigation from '../components/business/BusinessNavigation';

const Business = () => {
  return (
    <div className="h-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Empresa</h1>
      <div className="flex gap-6 h-[calc(100vh-10rem)]">
        <BusinessNavigation />
        <div className="flex-1 bg-white rounded-lg shadow p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Business;