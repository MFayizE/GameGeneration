import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import findPlatform from "../hooks/findPlatform";
import useGameQueryStore from "../store";



const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const onSelectPlatform = useGameQueryStore(s => s.setPlatformId)

  const selectedPlatform = findPlatform(selectedPlatformId)
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform.id)}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
