import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types'


class Paging extends Component {

    render() {
        let {itemCount, pageSize, onPageChange, currentPage} = this.props;
        let pageCount = Math.ceil(itemCount / pageSize);

        if (pageCount === 1 || itemCount === 0) return null;
        const pages = _.range(1, pageCount + 1);
        return (
            <div>
                <nav>
                    <ul className="pagination">
                        {pages.map((page) =>
                            <li className={currentPage === page ? 'page-item active' : 'page-item'} key={page}>
                                <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}

Paging.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Paging;