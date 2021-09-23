import styled from "styled-components/native";

import DropDownPicker from "react-native-dropdown-picker";

export const DropDown = styled(DropDownPicker).attrs((props) => ({
  placeholderStyle: {
    color: props.theme.colors.disabled,
  },
  dropDownContainerStyle: {
    backgroundColor: props.theme.colors.background,
    borderColor: props.theme.colors.disabled,
    zIndex: 99,
  },
  disabledStyle: {
    opacity: 0.5,
  },
  textStyle: {
    color: props.theme.colors.text,
  },
  arrowIconStyle: {
    tintColor: props.theme.colors.disabled,
  },
  tickIconStyle: {
    tintColor: props.theme.colors.text,
  },
  listItemLabelStyle: {
    color: props.theme.colors.text,
  },
  searchContainerStyle: {
    borderBottomColor: props.theme.colors.disabled,
  },
  searchTextInputStyle: {
    color: props.theme.colors.text,
    borderColor: props.theme.colors.disabled,
  },
  searchPlaceholderTextColor: props.theme.colors.disabled,
  modalContentContainerStyle: {
    backgroundColor: props.theme.colors.background,
    padding: 5,
  },
}))`
  background: ${(props) => props.theme.colors.background};
  border-color: ${(props) => props.theme.colors.disabled};
  z-index: -1;
  margin-bottom: 15px;
`;
