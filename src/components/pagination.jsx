import { useSearchParams } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

const CustomPagination = ({ totalProducts, limit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 0;
  const totalPages = Math.ceil(+totalProducts / +limit);

  const handlePageChange = (pageNumber) => {
    setSearchParams({ page: pageNumber });
  };

  const renderPaginationItems = () => {
    const items = [];
    const DOTS = <Pagination.Ellipsis disabled />;
    const ITEMS_TO_SHOW = 5;

    // Always show first page
    items.push(
      <Pagination.Item
        key={0}
        active={currentPage === 0}
        onClick={() => handlePageChange(0)}
      >
        1
      </Pagination.Item>
    );

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(startPage + ITEMS_TO_SHOW - 1, totalPages - 2);

    if (currentPage > 2) {
      items.push(DOTS);
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={currentPage === i}
          onClick={() => handlePageChange(i)}
        >
          {i + 1}
        </Pagination.Item>
      );
    }

    if (endPage < totalPages - 2) {
      items.push(DOTS);
    }

    // Always show last page
    if (totalPages > 1) {
      items.push(
        <Pagination.Item
          key={totalPages - 1}
          active={currentPage === totalPages - 1}
          onClick={() => handlePageChange(totalPages - 1)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <Pagination>
      <Pagination.Prev
        disabled={currentPage === 0}
        onClick={() => handlePageChange(currentPage - 1)}
      />
      {renderPaginationItems()}
      <Pagination.Next
        disabled={currentPage === totalPages - 1}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </Pagination>
  );
};

export default CustomPagination;
