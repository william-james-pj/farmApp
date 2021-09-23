import { api } from "../services/api";
import { DropdownDataType } from "../@types/types";

type dataType = {
  id: number;
  name: string;
  iso2: string;
};

type responseType = {
  data: dataType[];
};

export const getState = async (countryCode: string) => {
  try {
    const response: responseType = await api.get(
      `/countries/${countryCode}/states`
    );
    let item: DropdownDataType = [];

    response.data.forEach((element) => {
      item.push({
        id: element.id,
        label: element.name,
        value: element.iso2,
      });
    });

    item.sort((a, b) => a.label.localeCompare(b.label));

    return item;
  } catch (error) {
    return [];
  }
};
