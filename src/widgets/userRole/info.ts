import person from "../../assets/icons/person.svg"
import logout from "../../assets/icons/logout.svg"

interface ITooltip {
  id: number;
  path: string;
  pathToIcon: string;
  label: string;
}

export const infoTooltip: ITooltip[] = [
  {
    id: 1,
    path: "/",
    pathToIcon: person,
    label: "Profile",
  },
  {
    id: 2,
    path: "/",
    pathToIcon: logout,
    label: "Выйти",
  },
];
