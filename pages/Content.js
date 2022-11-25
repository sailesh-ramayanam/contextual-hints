import React from 'react';
import { openTiledesk, closeTiledesk, Constants } from './Util';
class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  refreshTiledesk(type) {
    closeTiledesk();
    if (type === Constants.TYPE_PRACTICE) {
      openTiledesk();
    }
  }

  componentDidUpdate() {
    this.refreshTiledesk(this.props.data.type);
  }

  render() {
    let type = this.props.data.type || 'Default';
    let value = this.props.data.value || 'Use side nav to open a page';
    return (
      <div className="mainview">
        <h3> {type} </h3>
        <p> {value} </p>
      </div>
    );
  }
}

export default Content;
