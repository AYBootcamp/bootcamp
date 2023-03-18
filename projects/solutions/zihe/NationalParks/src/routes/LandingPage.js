import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <h1>The National Park Advisor</h1>
      <div>
        <Link to={''}>Home</Link>
        <Link to={'ListPage'}>List</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
