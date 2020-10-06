import React from 'react';
/*import logo from './logo.svg';*/
import ciis from './ciis.jpg';
import status from './status.png';
import './App.css';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ImageResize from "image-resize";
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'


const App = () => {
  return (
    
    <div>
      <img src={ciis} />
      <Sidebar bgColor='black' isCollapsed={false}>
        
        <LogoText>Hi Admin</LogoText>
        
        <font style= {{color : 'gray'}}>Admin/Finance </font>
        <ListItem >
        <ListItemText>Menu</ListItemText>
        </ListItem>
 
        <Item bgColor='black'>
          <Icon><i className="status"/></Icon>
          
          Check Status
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-info"/></Icon>
          Check Payment
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-sitemap"/></Icon>
          All research
        </Item>
        
        <DropdownItem
          values={['Total','Paypal','TMB']}
          bgColor = {'black'}>
            Paid research
          </DropdownItem>
        
        <ListItem >
        <ListItemText>Setting</ListItemText>
        </ListItem>
        <Item bgColor='black'>
          <Icon><i className="fas fa-home"/></Icon>
          Edit
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-info"/></Icon>
          Sign out
        </Item>
        
        <Item bgColor='black'>
          <Icon><i className="fas fa-info"/></Icon>
          Sign OUT2
        </Item>
        
      </Sidebar>
    </div>
  )
};

export default App;
