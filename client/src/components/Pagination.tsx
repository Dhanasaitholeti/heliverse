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

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Button
          key={i}
          variant={currentPage === i ? "solid" : "outline"}
          colorScheme={currentPage === i ? "teal" : "gray"}
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
