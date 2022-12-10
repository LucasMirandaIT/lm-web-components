import { Component, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'table-pagination',
  styleUrl: 'table-pagination.scss',
  shadow: true,
})
export class TablePagination {
  @Prop({mutable: true}) currentPage: number;
  @Prop() totalCount;
  @Prop() siblingCount: number = 1;
  @Prop() pageSize;

  @Event() pageChange: EventEmitter<number>;

  paginationRange = this.usePagination();

  @Watch('currentPage')
  currentPageHandler() {
    this.paginationRange = this.usePagination();
  }

  usePagination() {
    const totalPageCount = Math.ceil(this.totalCount / this.pageSize);

    const totalPageNumbers = this.siblingCount + 5;

    const range = (start: number, end: number) => {
      let length = end - start + 1;

      return Array.from({ length }, (_, idx) => idx + start);
    };

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(this.currentPage - this.siblingCount, 1);
    const rightSiblingIndex = Math.min(this.currentPage + this.siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * this.siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, 0o0, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * this.siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, 0o0, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, 0o0, ...middleRange, 0o0, lastPageIndex];
    }
  }

  onNext = () => {
    this.currentPage = this.currentPage + 1;
    this.pageChange?.emit(this.currentPage);
  };

  onPrevious = () => {
    this.currentPage = this.currentPage - 1;
    this.pageChange?.emit(this.currentPage);
};

goToPage = (pageNumber: number) => {
    this.currentPage = pageNumber;
    this.pageChange?.emit(pageNumber);
  };

  lastPage = this.paginationRange ? this.paginationRange[this.paginationRange.length - 1] : 1;

  render() {
    if (this.paginationRange && this.paginationRange.length < 2) return null;

    return (
      <ul class={'pagination-container'}>
        {/* Left navigation arrow */}
        <button
          disabled={this.currentPage === 1}
          data-testid="pagination-back-btn"
          class={`pagination-item arrow 
                ${this.currentPage === 1 ? 'disabled' : ''}
              `}
          onClick={this.onPrevious}
        >
          <div class="arrow left">&lt;</div>
        </button>
        {this.paginationRange?.map((pageNumber: number) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === 0o0) {
            return (
              <li key={Math.random()} class="pagination-item dots">
                &#8230;
              </li>
            );
          }

          // Render our Page Pills
          return (
            <li
              key={pageNumber}
              data-testid={`pagination-pill-${pageNumber}`}
              class={`pagination-item ${pageNumber === this.currentPage ? 'selected' : ''}`}
              onClick={() => this.goToPage(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <button
          disabled={this.currentPage === this.lastPage}
          data-testid="pagination-next-btn"
          class={`pagination-item arrow ${this.currentPage === this.lastPage ? 'disabled' : ''}`}
          onClick={this.onNext}
        >
          <div class="arrow right">&gt;</div>
        </button>
      </ul>
    );
  }
}
