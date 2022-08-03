import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { HStack, IconButton } from "@chakra-ui/react";
import { usePagination } from "hooks/usePagination";
import { FC } from "react";

export const Pagination: FC = () => {
  const { currentPage, next, back, setPage, displayedPages } = usePagination({
    maxPage: 16,
  });

  return (
    <HStack spacing="32px">
      <IconButton
        aria-label="back"
        rounded="full"
        variant="outline"
        icon={<ArrowBackIcon />}
        onClick={back}
      />
      <HStack>
        {displayedPages.map((page) => {
          const isCurrent = currentPage === page;

          return (
            <IconButton
              key={page}
              aria-label="page"
              rounded="full"
              variant={isCurrent ? "solid" : "ghost"}
              bgColor={isCurrent ? "purple.primary" : "white"}
              color={isCurrent ? "white" : "black"}
              _hover={{ bgColor: isCurrent ? "purple.600" : "" }}
              _active={{ bgColor: isCurrent ? "purple.700" : "" }}
              icon={<div>{page}</div>}
              onClick={() => setPage(page)}
            />
          );
        })}
      </HStack>
      <IconButton
        aria-label="back"
        rounded="full"
        variant="outline"
        ml="32px"
        icon={<ArrowForwardIcon />}
        onClick={next}
      />
    </HStack>
  );
};
