import React, {Component} from 'react';

class Like extends Component {
    getCssForLike() {
        let cssClass = 'fa fa-heart';
        if (!this.props.like) cssClass += '-o';
        return cssClass;
    };

    render() {
        return (
            <div>
                <i className={this.getCssForLike()} aria-hidden="true" onClick={() => this.props.onLike(this.props.movie)}></i>
            </div>
        );
    }
}

export default Like;