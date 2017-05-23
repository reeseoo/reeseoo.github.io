import React from 'react';



class SidebarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { likesCount: 0 };
    }

    render() {
        return <div style={{ display: 'inline-block', float: 'left', height: '100%', width:'350px', margin: 'auto', backgroundColor:'black' }}> SIDEBAR </div>;
    }
}

export default SidebarComponent;