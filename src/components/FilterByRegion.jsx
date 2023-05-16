import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const links = [
  { label: "Remove Filter", value: "Filter by Region" },
  { label: "Africa", value: "Africa" },
  { label: "Americas", value: "Americas" },
  { label: "Asia", value: "Asia" },
  { label: "Europe", value: "Europe" },
  { label: "Oceania", value: "Oceania" },
];

function FilterByRegion({ selectedRegion, setSelectedRegion }) {
  const handleItemClick = (value) => {
    setSelectedRegion(value);
  };

  return (
    <div className="font-semibold text-sm ">
      <Menu>
        <Menu.Button className="flex justify-between items-center rounded-md w-56 p-4 shadow-lg bg-white">
          <p>{selectedRegion}</p>
          <BsChevronDown />
        </Menu.Button>
        <Menu.Items className="bg-white my-1 rounded-md shadow-lg absolute left-4">
          <div className="py-3">
            {links.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item
                key={link.label}
                as={Fragment}
                className="py-1 px-4 w-56 "
              >
                {({ active }) => (
                  <p
                    className={`${
                      active ? "bg-blue-500 text-white" : "bg-white text-black"
                    }`}
                    onClick={() => handleItemClick(link.value)}
                  >
                    {link.label}
                  </p>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default FilterByRegion;
