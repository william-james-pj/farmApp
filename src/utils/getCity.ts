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

export const getCity = async (countryCode: string, stateCode: string) => {
  try {
    const response: responseType = await api.get(
      `/countries/${countryCode}/states/${stateCode}/cities`
    );
    let item: DropdownDataType = [];

    response.data.forEach((element) => {
      item.push({
        id: element.id,
        label: element.name,
        value: element.name,
      });
    });

    item.sort((a, b) => a.label.localeCompare(b.label));

    return item;
  } catch (error) {
    console.log(error);
    return [];
  }
};
