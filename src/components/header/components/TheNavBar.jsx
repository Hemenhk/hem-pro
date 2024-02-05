import { NavLink } from "react-router-dom";
import {
  NavigationMenuItem,
  NavigationMenu,
  NavigationMenuList,
} from "../../ui/navigation-menu";


const navLinks = [
  { href: "/", handle: "Home" },
  { href: "/features", handle: "Features" },
  { href: "/pricing", handle: "Pricing" },
  { href: "/help", handle: "Help" },
];

export default function TheNavBar() {
  const mappedNavLinks = navLinks.map((link) => (
    <NavigationMenuItem key={link.href}>
      <NavLink className="font-medium text-sm">{link.handle}</NavLink>
    </NavigationMenuItem>
  ));
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-6">{mappedNavLinks}</NavigationMenuList>
    </NavigationMenu>
  );
}
