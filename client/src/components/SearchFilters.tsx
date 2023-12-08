import { useState } from "react";
import {
  Input,
  FormControl,
  Badge,
  Stack,
  HStack,
  Container,
} from "@chakra-ui/react";

const SearchAndFilterComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleFilterClick = (filter: string) => {
    // Toggle the filter on/off
    setActiveFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((prevFilter) => prevFilter !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  return (
    <Container p={4} mb={10} maxW={"60%"}>
      <FormControl>
        <Input
          type="text"
          placeholder="Enter your search term"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </FormControl>

      <Stack spacing={4} mt={4}>
        <HStack>
          {/* Badges for filter options */}
          <Badge
            borderRadius="full"
            px="2"
            fontSize={16}
            variant={activeFilters.includes("Option1") ? "solid" : "outline"}
            colorScheme="blue"
            cursor="pointer"
            onClick={() => handleFilterClick("Option1")}
          >
            Option 1
          </Badge>

          <Badge
            borderRadius="full"
            px="2"
            fontSize={16}
            variant={activeFilters.includes("Option2") ? "solid" : "outline"}
            colorScheme="blue"
            cursor="pointer"
            onClick={() => handleFilterClick("Option2")}
          >
            Option 2
          </Badge>

          <Badge
            borderRadius="full"
            px="2"
            fontSize={16}
            variant={activeFilters.includes("Option3") ? "solid" : "outline"}
            colorScheme="blue"
            cursor="pointer"
            onClick={() => handleFilterClick("Option3")}
          >
            Option 3
          </Badge>
        </HStack>
      </Stack>
    </Container>
  );
};

export default SearchAndFilterComponent;
