import React, {Component} from 'react';

class LeftMenu extends Component {
    render() {
        let {items} = this.props;
        return (
            <div>
                <ul className="list-group">
                    <li className={this.props.currentFilter === 'all' ? 'list-group-item active' : 'list-group-item '}
                        onClick={() => this.props.onFilter('all')}>All Movie
                    </li>
                    {items.map((item, key) =>
                        <li onClick={() => this.props.onFilter(item.name)}
                            key={key}
                            className={this.props.currentFilter === item.name ? 'list-group-item active' : 'list-group-item '}>{item.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default LeftMenu;