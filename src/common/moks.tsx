import {
  Collections,
  Yard,
  LocalFlorist,
  ContactPage,
  Menu,
  Home,
  ListAltOutlined,
  ListAlt,
  Description,
  PostAdd,
  NoteAdd,
} from '@mui/icons-material';

import AuthRoot from '../pages/auth';
import Care from '../pages/care';
// import CatalogPage from '../pages/catalog-page';
import Contacts from '../pages/contacts';
import Gallery from '../pages/gallery';
import Good from '../pages/good';
import Group from '../pages/group';
import HomePage from '../pages/home';
import SubGroup from '../pages/sub-group';
import imgOne from '../assets/img-one.jpg';
import imgTwo from '../assets/img-two.jpg';
import imgThree from '../assets/image-three.jpg';
import imgFour from '../assets/image-four.jpg';
import roseOne from '../assets/roseOne.jpg';
import roseTwo from '../assets/roseTwo.jpg';
import roseThree from '../assets/roseThree.jpg';
import roseFour from '../assets/roseFour.jpg';
import roseMain from '../assets/rose-main.jpg';
import roseAll from '../assets/rose-all.jpg';
import Order from '../pages/order';

export const navMenu = [
  {
    name: 'Головна',
    icon: <Home fontSize='small' />,
    path: '/',
  },
  // {
  //   name: 'Каталог',
  //   icon: <Menu fontSize='small' />,
  //   path: '/catalog',
  // },
  {
    name: 'Фотогалерея',
    icon: <Collections fontSize='small' />,
    path: '/gallery',
  },
  {
    name: 'Контакти',
    icon: <ContactPage fontSize='small' />,
    path: '/contacts',
  },
  {
    name: `Як${'\u00A0'}доглядати`,
    icon: <Description fontSize='small' />,
    // icon: <LocalFlorist fontSize='small' />,
    path: '/care',
  },
  {
    name: `Як${'\u00A0'}замовити`,
    icon: <NoteAdd fontSize='small' />,
    // icon: <Yard fontSize='small' />,
    path: '/order',
  },
];

export const pages = [
  {
    element: <HomePage />,
    path: '/',
  },
  // {
  //   element: <CatalogPage />,
  //   path: '/catalog',
  // },
  {
    element: <Group />,
    path: '/group',
  },
  {
    element: <SubGroup />,
    path: '/sub_group',
  },
  {
    element: <Gallery />,
    path: '/gallery',
  },
  {
    element: <Contacts />,
    path: '/contacts',
  },
  {
    element: <Care />,
    path: '/care',
  },
  {
    element: <Order />,
    path: '/order',
  },
  {
    element: <Good />,
    path: '/good',
  },
  {
    element: <AuthRoot />,
    path: '/login',
  },
  {
    element: <AuthRoot />,
    path: '/register',
  },
  {
    element: <HomePage />,
    path: '*',
  },
];
export const items = [
  {
    name: 'Random Name #Main',
    description: 'Probably the most random thing you have ever seen!',
    image: roseMain,
  },
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
    image: imgOne,
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!Button className CheckButtonCheck it out',
    image: imgTwo,
  },
  {
    name: 'Random Name #3',
    description: 'Probably the most random thing you have ever seen!',
    image: imgThree,
  },
  {
    name: 'Random Name #4',
    description: 'Button className CheckButtonCheck it out!',
    image: imgFour,
  },
];

export const groups = [
  { name: 'Троянди', path: '' },
  { name: 'Багаторічникі', path: '' },
  {
    name: `Декоративні${'\u00A0'}кущі${'\u00A0'}та${'\u00A0'}дерева`,
    path: '',
  },
  { name: `Плодово${'\u2011'}ягідні`, path: '' },
  { name: `Кімнатні${'\u00A0'}рослини`, path: '' },
  { name: `Стильні${'\u00A0'}букети`, path: '' },
  { name: `Насіння,${'\u00A0'}засоби${'\u00A0'}захисту`, path: '' },
];

export const groupes = [
  { name: 'Троянди', path: '' },
  { name: 'Багаторічникі', path: '' },
  {
    name: `Кущі${'\u00A0'}та${'\u00A0'}дерева`,
    path: '',
  },
  { name: `Плодово${'\u2011'}ягідні`, path: '' },
  { name: `Кімнатні${'\u00A0'}рослини`, path: '' },
  { name: `Стильні${'\u00A0'}букети`, path: '' },
  { name: `Насіння,${'\u00A0'}захист`, path: '' },
];

export const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

const newLocal = `Сейм Латвії визнав рф країною-спонсором тероризму.`;
export const steps = [
  {
    image: roseAll,
    name: 'Всі троянди',
    description:
      'Англійські Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»',
  },
  {
    image: roseOne,
    // content: `Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод.
    //   Людей, які б таке допускали, в нашій команді немає»`,
    name: 'Англійські',
    description:
      'Англійські Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»',
  },
  {
    image: roseTwo,
    name: 'Плетисті (виткі)',
    description: `Оприлюднено супутникові знімки аеродрому біля Новофедорівки:
    //   видно місця ураження`,
  },
  {
    image: roseThree,
    name: 'Шраби',
    description: `Вибухи на білоруському аеродромі "Зябрівка":
    //   оприлюднені причини вибухів, супутникові знімки аеродрому`,
  },
  {
    image: roseFour,
    name: 'Флорібунда',
    description: `Сейм Латвії визнав рф країною-спонсором тероризму.`,
  },
  {
    image: roseOne,
    name: 'Спреї',
    description: `Сейм Латвії визнав рф країною-спонсором тероризму.`,
  },
  {
    image: roseTwo,
    name: 'Чайно-гібридні',
    description: `Оприлюднено супутникові знімки аеродрому біля Новофедорівки:
    видно місця ураження`,
  },
];
