import Link from "next/link";

import { navItemsDesktop } from "@/constants/index";
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
    <NavigationMenu className="hidden lg:flex relative">
      <NavigationMenuList className="gap-5">
        {navItemsDesktop.map((navItem) => (
          <div key={navItem.id}>
            {!navItem?.details ? (
              <NavigationMenuItem key={navItem.id}>
                <Link href={navItem.link} legacyBehavior passHref>
                  <NavigationMenuLink>
                    {navItem.name.toUpperCase()}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={navItem.name} className="">
                <NavigationMenuTrigger>
                  {navItem.name.toUpperCase()}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#102136] text-white">
                  {/* <ul className="grid gap-3 p-4 md:w-[300px]">
                    {navItem.sub.map((item) => (
                      <ListItem
                        key={item.name}
                        title={item.name}
                        href={item.link.toLocaleLowerCase()}
                        className="hover:text-[#7456F1] hover:bg-transparent"
                      />
                    ))}
                  </ul> */}

                  <ul
                    className={`grid gap-3 p-4 md:w-[650px] grid-cols-${navItem.details.length} w-full`}
                  >
                    {navItem.details.map((item: any) => (
                      <div
                        className="flex flex-col gap-3 w-full px-1 border-r-[1px] border-gray-700 last:border-none"
                        key={item.name}
                      >
                        <p className="font-bold text-muted-foreground">
                          {item.name}
                        </p>
                        {item.sub.map((item: any) => (
                          <ListItem
                            key={item.name}
                            title={item.name}
                            href={item.link.toLocaleLowerCase()}
                            className="hover:text-[#7456F1] hover:bg-transparent font-light"
                          />
                        ))}
                      </div>
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
