import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


interface Props {
    onSelectSortOrder: (sortOrder: string) => void
    sortOrder: string
}

const SortSelector = ({onSelectSortOrder,sortOrder}:Props) => {
  const sortOrders = [
    { value: "", label: "Revelence" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  // if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSortOrder?.label || 'Revelence'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem  onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
