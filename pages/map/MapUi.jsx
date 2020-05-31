import React, { Component } from 'react';
import {Button} from 'antd-mobile'
export class MapUi extends Component {
  render() {
    return (
     <>
      <div>
        
      <Button onClick={this.props.scanQRCode}>扫描二维码 </Button>
      </div>
     </>
    );
  }
}

export default MapUi;
