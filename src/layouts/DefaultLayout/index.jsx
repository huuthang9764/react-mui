import React from 'react';
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components';
import BaseBox from '../../components/base_box/BaseBox';


const DefaultLayout = () => {
  return (
    <>
      <BaseBox sx={{ display: 'flex' }}>
        <Sidebar />
        <BaseBox component="main" sx={{ flexGrow: 1, p: 1 }}>
          <Outlet />
        </BaseBox>
      </BaseBox>
    </>
  );
};

export default DefaultLayout;
