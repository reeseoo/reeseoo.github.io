import React from 'react';

class SidebarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { likesCount: 0 };
    }

    render() {
        return <div> SIDEBAR </div>;
    }
}

export default SidebarComponent;