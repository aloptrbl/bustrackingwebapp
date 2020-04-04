import React from 'react';
import { withAuthorization } from '../Session';
import Bus from '../../img/school-bus.svg';

const Drivers = () => (
  <div class="bg-gray-900 font-sans h-screen">
   <header class="fixed z-50 h-16 w-full bg-gray-900 shadow flex items-center justify-between">
    <div class="flex items-center h-full">
        <div class="flex items-center text-center h-full w-48 border-grey-dark">
            <span class="w-full text-white text-sm uppercase flex justify-center items-center font-extrabold">  <svg version="1.1" id="Layer_1" fill="white" height="30" width="30" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 100 100">
<path d="M89,38.5c3.3,0,6-2.7,6-6v-10c0-3.3-2.7-6-6-6h-4v-4c0-3.3-2.7-6-6-6H21c-3.3,0-6,2.7-6,6v4h-4c-3.3,0-6,2.7-6,6v10
	c0,3.3,2.7,6,6,6h4v6h-4c-3.3,0-6,2.7-6,6v27c0,3.3,2.7,6,6,6v4c0,3.3,2.7,6,6,6h8c3.3,0,6-2.7,6-6v-4h38v4c0,3.3,2.7,6,6,6h8
	c3.3,0,6-2.7,6-6v-4c3.3,0,6-2.7,6-6v-27c0-3.3-2.7-6-6-6h-4v-6H89z M85,20.5h4c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2h-4V20.5z
	 M63,10.5h16c1.1,0,2,0.9,2,2v4H63V10.5z M41,10.5h18v6H41V10.5z M19,12.5c0-1.1,0.9-2,2-2h16v6H19V12.5z M19,20.5h62v24H67.9
	c-0.5-2.8-2.9-5-5.9-5H38c-3,0-5.4,2.2-5.9,5H19V20.5z M36,59.5v-6h28v6H36z M64,63.5v6H36v-6H64z M36,49.5v-4c0-1.1,0.9-2,2-2h24
	c1.1,0,2,0.9,2,2v4H36z M11,34.5c-1.1,0-2-0.9-2-2v-10c0-1.1,0.9-2,2-2h4v14H11z M9,50.5c0-1.1,0.9-2,2-2h21v21h-6v-10
	c0-2.8-2.2-5-5-5H9V50.5z M9,58.5h12c0.5,0,1,0.5,1,1v10H9V58.5z M27,87.5c0,1.1-0.9,2-2,2h-8c-1.1,0-2-0.9-2-2v-4h12V87.5z
	 M85,87.5c0,1.1-0.9,2-2,2h-8c-1.1,0-2-0.9-2-2v-4h12V87.5z M91,77.5c0,1.1-0.9,2-2,2H11c-1.1,0-2-0.9-2-2v-4h82V77.5z M91,69.5H78
	v-10c0-0.5,0.5-1,1-1h12V69.5z M89,48.5c1.1,0,2,0.9,2,2v4H79c-2.8,0-5,2.2-5,5v10h-6v-21H89z"/>
</svg></span>
        </div>
    </div>
    <div class="flex items-center h-full text-sm">
        <div class="flex items-center h-full">
            <a href="#" class="flex items-center text-white h-full px-4">Alop</a>
            <a href="#" class="flex items-center text-white h-full px-4">Sign Out</a>
        </div>
    </div>
  </header>

  <div id="main" class="pt-16 flex">

    <div class="bg-blue-800 relative h-full min-h-screen w-1/6">
      <div class="xl:py-2">
        <div class="hidden xl:block uppercase font-bold text-grey-darker text-xs px-4 py-2">
          Main
        </div>
        <div class="group relative sidebar-item with-children">
          <a href="/home" class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-6 w-6 text-grey-darker fill-current xl:mr-2"><path fill="white" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z" class="heroicon-ui"></path></svg>
            <div class="text-white text-xs">Dashboard</div>
          </a>
        </div>
        <div class="group relative sidebar-item with-children">
        <a href="/drivers" class="active block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-6 w-6 text-grey-darker fill-current xl:mr-2"><path fill="white" d="M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z" class="heroicon-ui"></path></svg>
            <div class="text-white text-xs">Drivers</div>
          </a>
        </div>
      </div>

  
    </div>
    
    <div class="bg-white h-full min-h-screen w-5/6">


  </div>
  </div>
  </div>
  );
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Drivers);