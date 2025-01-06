import React from 'react';
import { useUserData } from '../../Hooks/useApiHooks';


const Header: React.FC = () => {
  const { data, isLoading, error } = useUserData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div>
      <h1>Header</h1>
      {data?.map((item) => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Header;