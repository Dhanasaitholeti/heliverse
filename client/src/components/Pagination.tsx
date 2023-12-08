import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const navigate = useNavigate();

  const handlePageClick = (pg: number) => {
    navigate(`/?page=${pg}`);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const displayRange = 2; // Number of pages to display on each side of the current page

    // Display pages on the left of the current page
    for (
      let i = Math.max(1, currentPage - displayRange);
      i < currentPage;
      i++
    ) {
      pageNumbers.push(
        <Button
          key={i}
          variant="outline"
          colorScheme="gray"
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Button>
      );
    }

    // Display the current page
    pageNumbers.push(
      <Button
        key={currentPage}
        variant="solid"
        colorScheme="teal"
        onClick={() => handlePageClick(currentPage)}
      >
        {currentPage}
      </Button>
    );

    // Display pages on the right of the current page
    for (
      let i = currentPage + 1;
      i <= Math.min(totalPages, currentPage + displayRange);
      i++
    ) {
      pageNumbers.push(
        <Button
          key={i}
          variant="outline"
          colorScheme="gray"
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Button>
      );
    }

    return pageNumbers;
  };

  return (
    <Flex align="center" justify="center" mt={4}>
      {currentPage > 1 && (
        <Button onClick={() => handlePageClick(currentPage - 1)} mr={2}>
          Previous
        </Button>
      )}

      {renderPageNumbers()}

      {currentPage < totalPages && (
        <Button onClick={() => handlePageClick(currentPage + 1)} ml={2}>
          Next
        </Button>
      )}
    </Flex>
  );
};

export default Pagination;
