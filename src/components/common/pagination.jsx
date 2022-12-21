import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { itemsCount, pageSize } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
      <nav>
        <ul className="pagination">
          {pages.map((pageNumber) => (
            <li key={pageNumber} className="page-item">
              <a className="page-link">{pageNumber}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
