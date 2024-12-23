/** @format */

import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const DropDownMenu = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {/* Display the selected language */}
          {selectedLanguage}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-37 bg-white shadow-lg ring-1 ring-black/5"
      >
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => handleLanguageChange("ENG")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              ENG
            </button>
          </MenuItem>
          <hr />
          <MenuItem>
            <button
              onClick={() => handleLanguageChange("FRE")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              FRE
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default DropDownMenu;
