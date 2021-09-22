import React, { useState } from "react";

import * as S from "./styles";

type DropdownProps = {
  searchable?: boolean;
  disabled?: boolean;
  itemsData: { label: string; value: string }[];
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export function Dropdown({
  searchable = false,
  disabled = false,
  itemsData,
  placeholder,
  value,
  setValue,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(itemsData);

  return (
    <S.Wrapper>
      <S.DropDown
        disabled={disabled}
        listMode="SCROLLVIEW"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        dropDownDirection="AUTO"
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder="Search..."
      />
    </S.Wrapper>
  );
}
