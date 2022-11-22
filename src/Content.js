import React from 'react';
import { openTiledesk, closeTiledesk, Constants } from './Util';
class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    closeTiledesk();
    let type = this.props.data.type || 'Default';
    let value = this.props.data.value || 'Use side nav to open a page';
    if (type === Constants.TYPE_PRACTICE) {
      openTiledesk();
    }
    return (
      <div className="mainview">
        <h3> {type} </h3>
        <p> {value} </p>
      </div>
    );
  }
}

export default Content;
