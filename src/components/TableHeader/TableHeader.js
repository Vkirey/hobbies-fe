
import React, { Component } from 'react';
import './TableHeader.scss';

class TableHeader extends Component {
    render() {
        return <div className="table-header">
            {this.props.children}
        </div>
    }
}

export default TableHeader;