import GlobalMenu from './GlobalMenu/GlobalMenu';
import LocalMenu from './LocalMenu/LocalMenu';
import Header from './Header/Header';
import Logo from './Logo/Logo';
import ContextLink from './ContextLink/ContextLink';

export interface ContextNode {
  exact: boolean;
  path: string;
  title: string;
  icon: string[];
}

export type ContextList = {
  [index: number]: ContextNode;
  map: any;
}

export {
  GlobalMenu,
  LocalMenu,
  Header,
  Logo,
  ContextLink
};