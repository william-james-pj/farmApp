import { GuideBoxType } from "../@types/types";

export const guideData = (en: boolean): GuideBoxType[] => {
  if (en) return dataEN;
  else return dataBR;
};

const dataBR: GuideBoxType[] = [
  {
    id: "1",
    title: "Como montar os sensores",
    description: "Aprenda a configurar e montar os sensores na sua plantação",
  },
  {
    id: "2",
    title: "Como utilizar o aplicativo",
    description:
      "Aprenda como utilizar o aplicativo e realizar a conexão com os sensores",
  },
];

const dataEN: GuideBoxType[] = [
  {
    id: "1",
    title: "How to mount the sensors",
    description: "Learn how to configure and mount sensors in your plantation",
  },
  {
    id: "2",
    title: "How to use the app",
    description: "Learn how to use the app and connect to the sensors",
  },
];
