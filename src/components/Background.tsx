import React from 'react';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-900 dark:from-gray-900 dark:to-gray-800">
        {/* DevOps Infinity Loop Animation */}
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 15C30 15 15 30 15 50s15 35 35 35 35-15 35-35S70 15 50 15zm0 5c16.6 0 30 13.4 30 30S66.6 80 50 80 20 66.6 20 50s13.4-30 30-30z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '400px 400px',
            animation: 'rotate 60s linear infinite'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(0,0,0,0)_20%,rgba(0,0,0,0.5))]" />
      </div>
    </div>
  );
};