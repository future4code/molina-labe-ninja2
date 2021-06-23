import React from 'react';
import SectionThird from './sectionThird/SectionThird';
import SectionSecond from './sectionSecond/SectionSecond';
import SectionFirst from './sectionFirst/SectionFirst';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <SectionFirst />
        <SectionSecond />
        <SectionThird />
      </div>
    )
  }
}