import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">{this.props.showingMsg}</a>
                </nav>
            </div>
        );
    }
}

export default NavBar;