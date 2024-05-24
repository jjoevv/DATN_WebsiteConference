// HeaderNoti.js
import { useEffect, useState } from 'react';
import useNotification from '../../hooks/useNotification';
import { Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { io } from 'socket.io-client';


const HeaderNoti = ({socket}) => {
  const [input, setInput] = useState('');
  //const { socket,  notifications, hasNewNotification, message, error, isConnected, sendMessage } = useNotification();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  useEffect(() => {
    socket.on('notification', (message) => {
      localStorage.setItem('noti_dot', JSON.stringify('true'))
     
      console.log({message})
    });
   if(socket){
    console.log({socket})
   }
  }, [ socket]);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
    if (!dropdownOpen) {
      localStorage.setItem('noti_dot', JSON.stringify('false'))
    }
  };

  return (
    <div className="header">
      
    </div>
  );
};

export default HeaderNoti;
