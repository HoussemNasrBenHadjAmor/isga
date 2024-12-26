import Link from "next/link";

import { navItems } from "@/constants/index";
import { ListItem } from "@/components";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function DesktopNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-5">
        {navItems.map((navItem) => (
          <div key={navItem.id}>
            {!navItem?.sub ? (
              <NavigationMenuItem key={navItem.id}>
                <Link href={navItem.link} legacyBehavior passHref>
                  <NavigationMenuLink>
                    {navItem.name.toUpperCase()}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={navItem.name}>
                <NavigationMenuTrigger>
                  {navItem.name.toUpperCase()}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#102136] text-white">
                  <ul className="grid gap-3 p-4 md:w-[300px]">
                    {navItem.sub.map((item) => (
                      <ListItem
                        key={item.name}
                        title={item.name}
                        href={item.link.toLocaleLowerCase()}
                        className="hover:text-[#7456F1] hover:bg-transparent"
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )}
          </div>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default DesktopNav;
