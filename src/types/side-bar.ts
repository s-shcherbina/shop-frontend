export interface ISideBarButton {
  pathname: string;
  path: string;
  // icon: ReactNode;
  // icon: JSX.Element;
  name: string;
  click: () => void;
}
