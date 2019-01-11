import React, { Component } from 'react';
import Collapsible from './collapsible';

class CollapsiblesThree extends Component {
    constructor(props){
            super(props);
            this.icon='';
            }

  render() {
    return (
        <div>
            <Collapsible title="DISEÑA" icon="fa fa-object-ungroup" arrowIcon="fa-angle-up"/>
            <Collapsible title="RELLENA" icon="fa fa-keyboard" arrowIcon="fa-angle-down"/>
            <Collapsible title="COMPARTE" icon="fa fa-share-alt" arrowIcon="fa-angle-down"/>
        </div>
        )
}

}

export default CollapsiblesThree;