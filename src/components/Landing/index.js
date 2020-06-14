import React from 'react';
import Navigation from '../Navigation';
import Bus from '../../img/bus.svg';
const LandingPage = () => (
<div class="">
<nav class="flex items-center justify-between flex-wrap bg-blue-800 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
  <svg version="1.1" id="Layer_1" fill="white" height="50" width="50" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
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
</svg>
    <span class="font-semibold text-xl tracking-tight">Bus Location Monitoring Application (Admin)</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
     
      </a>

    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign In</a>
    </div>
  </div>
</nav>
<div class="lg:container mx-auto">
<div class="flex flex-col lg:flex-row flex-shrink-0 bg-white-900 text-white h-screen overflow-hidden">
<div class="flex-1 overflow-y-auto">
    <div class="container mx-auto px-8 py-auto">
        <main class="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
            <div class="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div class="flex-row flex">
              <div class="flex-col flex">
              <img src={Bus} class="w-48 pl-10" />
              <h1 class="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">Bus Location Monitoring</h1>
                <h2 class="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">Application</h2>
                </div>
 
              </div>
               
                <a href="/signin" class="bg-blue-800 hover:bg-blue-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full">Sign In</a>
            </div>
            <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
 
            </div>
        </main>
    </div>
</div>
</div>
</div>
</div>
);

export default LandingPage;