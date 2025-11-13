import { Outlet } from 'react-router';

export default function ProfileComponent() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Profile</h1>
      <Outlet />
    </div>
  );
}
