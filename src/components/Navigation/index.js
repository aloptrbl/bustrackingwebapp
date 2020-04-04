import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { Header, NavBrand, NavItem, NavMenu, NavToggle, Box, OutlineButton } from 'tailwind-react-ui';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div class="lg:w-24 w-full flex justify-center items-center overflow-hidden">
     <nav class="flex lg:flex-col flex-row items-center w-full justify-between">
        <a href="#" class="p-4 text-gray-500 hover:text-white">
           <i class="fas fa-search"></i>
        </a>
        <a href="#" class="p-4 text-gray-500 hover:text-white">
           <i class="fas fa-home"></i>
        </a>
        <a href="#" class="p-4 text-gray-500 hover:text-white">
           <i class="fas fa-plus"></i>
        </a>
        <a href="#" class="p-4 text-gray-500 hover:text-white">
           <i class="fas fa-ticket-alt"></i>
        </a>
        <a href="#" class="p-4 text-gray-500 hover:text-white">
           <i class="fas fa-tv"></i>
        </a>
        <a href="#" class="p-4 text-gray-500 hover:text-white">
           <i class="fas fa-star"></i>
        </a>
        <a href="#" class="p-4 text-gray-500 hover:text-white">
           <i class="fas fa-cog"></i>
        </a>
     </nav>
  </div>
);
const NavigationNonAuth = () => (
  // <ul>
  //   <li>
  //     <Link to={ROUTES.LANDING}>Landing</Link>
  //   </li>
  //   <li>
  //     <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  //   </li>
  // </ul>
  
     <nav class="flex lg:flex-col flex-row items-center w-full justify-between">
 <a href="#" class="p-4 text-gray-500 hover:text-white">
           <i class="fas fa-home"></i>
        </a>
        <a href="#" class="p-4 text-gray-500 hover:text-white">
           <i class="fas fa-sign-in-alt"></i>
        </a>
        <a href="#" class="p-4 text-gray-500 hover:text-white">
           <i class="fas fa-plus"></i>
        </a>
     </nav>
 
);

export default Navigation;