import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";
import findPlatform from "../hooks/findPlatform";

interface Props {
    onSelectPlatform: (platform : Platform) => void
    selectedPlatformId? : number
  }

const PlatformSelector = ({selectedPlatformId, onSelectPlatform}: Props) => {
  const { data, error } = usePlatform();
  const selectedPlatform = findPlatform(selectedPlatformId)
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
