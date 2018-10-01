import React, {Component} from 'react';
import _ from 'lodash';

class Paging extends Component {

    render() {
        let {itemCount, pageSize, onPageChange} = this.props;
        let pageCount = Math.ceil(itemCount / pageSize);
        if (pageCount === 1) return null;
        const pages = _.range(1, pageCount + 1);
        return (
            <div>
                <nav>
                    <ul className="pagination">
                        {pages.map((page, key) =>
                            <li className="page-item" key={key}>
                                <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Paging;