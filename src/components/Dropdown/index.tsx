import React, { useState, useEffect } from "react";
import { DropdownDataType } from "../../@types/types";

import * as S from "./styles";

type DropdownProps = {
  searchable?: boolean;
  disabled?: boolean;
  onChangeValue?: () => void;
  itemsData: DropdownDataType;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  loading?: boolean;
  listMode?: string;
};

export function Dropdown({
  searchable = false,
  disabled = false,
  itemsData,
  placeholder,
  value,
  setValue,
  loading = false,
  onChangeValue = () => {},
  listMode = "SCROLLVIEW",
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(itemsData);

  useEffect(() => {
    setItems(itemsData);
  }, [itemsData]);

  return (
    <S.DropDown
      itemKey="id"
      loading={loading}
      disabled={disabled}
      listMode={listMode}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownDirection="TOP"
      placeholder={placeholder}
      searchable={searchable}
      searchPlaceholder="Search..."
      onChangeValue={onChangeValue}
      flatListProps={{
        initialNumToRender: 5,
      }}
    />
  );
}
