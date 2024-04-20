import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { BsHouseDoorFill, BsGraphUp, BsFileText, BsGearFill, BsPersonFill, BsChatDotsFill, BsBellFill, BsQuestionCircleFill } from 'react-icons/bs';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}><IoMdClose /></button>
      <nav className='flex flex-col gap-5 p-5 bg-gradient-to-b from-gray-100 to-gray-200 border-r-2 border-gray-300'>
        <a className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-300' href="#">
          <BsHouseDoorFill /> <span>Dashboard</span>
        </a>
        <a className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-300' href="#">
          <BsGraphUp /> <span>Analytics</span>
        </a>
        <a className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-300' href="#">
          <BsFileText /> <span>Report</span>
        </a>
        <a className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-300' href="#">
          <BsGearFill /> <span>Setting</span>
        </a>
        <a className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-300' href="#">
          <BsPersonFill /> <span>Profile</span>
        </a>
        <a className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-300' href="#">
          <BsChatDotsFill /> <span>Messages</span>
        </a>
        <a className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-300' href="#">
          <BsBellFill /> <span>Notification</span>
        </a>
        <a className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-300' href="#">
          <BsQuestionCircleFill /> <span>Help</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
