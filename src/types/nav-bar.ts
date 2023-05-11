export interface ILoginButton {
  text: boolean;
}

export interface ILogButton {
  icon: JSX.Element;
  text: string;
  trigger: any;
}

export interface INavButton {
  navigate: (to: string) => void;
  page: string;
  setPage: (value: string) => void;
  currentPage: string;
  icon: JSX.Element;
  text: string;
  index: number;
}

export interface IDrawer {
  setPage: (value: string) => void;
  navigate: (to: string) => void;
}

export interface IDrawerMenu extends IDrawer {
  menuOpen: boolean;
  menuToggle: () => void;
  page: string;
}

export interface IDrawerCatalog extends IDrawer {
  catalogOpen: boolean;
  catalogToggle: () => void;
}
