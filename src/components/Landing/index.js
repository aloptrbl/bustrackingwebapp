import React from 'react';
import Navigation from '../Navigation';
import Bus from '../../img/bus.svg';
const LandingPage = () => (
  <div class="flex flex-col lg:flex-row flex-shrink-0 bg-gray-900 text-white h-screen overflow-hidden">
<div class="lg:w-24 w-full flex justify-center items-center overflow-hidden">
<Navigation />
</div>
  <div class="flex-1 overflow-y-auto">
      <div class="container mx-auto px-8 py-auto">
          <main class="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
              <div class="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div class="flex-row flex">
                <div class="flex-col flex">
                <img src={Bus} class="w-48 pl-10" />
                <h1 class="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">UTeM Bus Tracking</h1>
                  <h2 class="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">WEB APP</h2>
                  </div>
   
                </div>
                 
                  <a href="#" class="bg-purple-300 hover:bg-purple-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full">Sign In</a>
              </div>
              <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
   
              </div>
          </main>
      </div>
  </div>
</div>
);

export default LandingPage;