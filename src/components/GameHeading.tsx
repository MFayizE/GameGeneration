import { Heading } from "@chakra-ui/react";
import findPlatform from "../hooks/findPlatform";
import findGenre from "../hooks/findGenre";
import useGameQueryStore from "../store";



const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const genre = findGenre(genreId);

  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = findPlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
