
import React from 'react'

import Header from './_components/Header';
import Siderbar from './_components/Sidebar'


const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex h-screen bg-[#0B0E18] text-white ' >
        {/* sideBar */}
        <Siderbar/>
        {/* main */}
        <div className='flex flex-1 flex-col'> 
                {/* header */}
                <Header/>
          <main className='p-6 overflow-y-auto'>
        {children}
          </main>
        </div>
        </div>
  )
}

export default DashboardLayout   