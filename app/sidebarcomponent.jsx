import React, {Link} from 'react';

class SidebarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{ display: 'inline-block', float: 'left', height: '100%', width:'350px', margin: 'auto', backgroundColor:'#80CBC4' }}> 
            <h2>R Morris</h2>
            <Link to="/demo"/>
            <ul>

                <li>Projects</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>;
    }
}

export default SidebarComponent;