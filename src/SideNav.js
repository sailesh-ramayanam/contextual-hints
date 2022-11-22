import React from 'react';
import { Constants } from './Util';

const SideNav = (props) => {
  let navItems = [
    {
      type: Constants.TYPE_LECTURE,
      title: 'Control flow',
      value: 'We will learn about loops in this lecture.',
    },
    {
      type: Constants.TYPE_PRACTICE,
      title: 'Palindrome',
      value: 'Given an integer, check if it is a palindrome or not',
    },
    {
      type: Constants.TYPE_PRACTICE,
      title: 'Even odd',
      value:
        'Given x and y co-ordinates of a point, determine the quadrant in which it is present.',
    },
  ];
  let divChildren = navItems.map(function (navItem, index) {
    let clickHandler = (e) => {
      props.clickHandler(navItem.type, navItem.value);
    };
    return (
      <a key={index} href="#section" onClick={clickHandler}>
        {navItem.title}
      </a>
    );
  });
  return <div className="sidenav">{divChildren}</div>;
};
export default SideNav;
