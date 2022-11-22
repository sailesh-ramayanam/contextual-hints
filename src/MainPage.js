import React from 'react';
import './style.css';
import SideNav from './SideNav';
import Content from './Content';
import { initTiledesk, disposeTiledesk } from './Util';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: null, value: null };
    initTiledesk();
  }

  componentWillUnmount() {
    disposeTiledesk();
  }

  changeView(type, value) {
    this.setState({ type: type, value: value });
  }
  render() {
    return (
      <div>
        <Content data={this.state} />
        <SideNav clickHandler={this.changeView.bind(this)} />
      </div>
    );
  }
}

export default MainPage;
