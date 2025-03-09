"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useRouter, useSearchParams } from "next/navigation";
import { getPathname, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { useLanguage } from "@/context/UseLanguage";
import { ListItem } from "@/components";
import { navItemsDesktop as navItemsDesktopType } from "@/constants";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";

import { Globe, ChevronDown } from "lucide-react";

// valid grid values
type NbItemGridOption = 1 | 2 | 3 | 4 | 5 | 6;

// class map
const basisClasses: Record<NbItemGridOption, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

function DesktopNav() {
  const t = useTranslations("navigationDesktop");
  const navItemsDesktop: typeof navItemsDesktopType = t.raw("items"); // convert the nav items into array
  const router = useRouter();
  const currentPath = usePathname(); // Get current path without locale
  const searchParams = useSearchParams(); // Get current query parameters

  const { language, setLanguage } = useLanguage();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // State to control Popover

  const changeLanguage = (value: string) => {
    setLanguage(value);
    setIsPopoverOpen(false); // Close the popover after selecting a language

    const params = new URLSearchParams(searchParams); // Convert to URL-friendly format

    // Generate the new path with the selected locale
    const newPath = getPathname({
      locale: value,
      href: { pathname: currentPath },
    });

    // Append existing query params if any
    const finalPath = params.toString()
      ? `${newPath}?${params.toString()}`
      : newPath;

    // Navigate to the updated path
    router.push(finalPath);
  };
  return (
    <div className="flex">
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
                      className={`grid gap-3 p-4 md:w-[650px] w-full ${
                        basisClasses[
                          navItem?.details?.length as NbItemGridOption
                        ]
                      }`}
                    >
                      {navItem.details.map((item) => (
                        <div
                          className="flex flex-col gap-3 w-full px-1 border-r-[1px] border-gray-700 last:border-none"
                          key={item.name}
                        >
                          <p className="font-bold text-muted-foreground">
                            {item.name}
                          </p>
                          {item.sub.map((item) => (
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

      <div className="hidden lg:flex relative">
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger
            asChild
            className="bg-transparent border-none focus:bg-transparent w-max hover:bg-transparent hover:text-inherit shadow-none"
          >
            <Button variant="outline" className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>{language.toUpperCase()}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-2 w-max z-[999]">
            <div className="grid gap-1 z-[999]">
              <Button
                variant={`${
                  language.toLowerCase() === "en" ? "default" : "ghost"
                }`}
                className="justify-start"
                onClick={() => changeLanguage("en")}
              >
                <span>English</span>
              </Button>
              <Button
                variant={`${
                  language.toLowerCase() === "fr" ? "default" : "ghost"
                }`}
                className="justify-start"
                onClick={() => changeLanguage("fr")}
              >
                <span>Francais</span>
              </Button>
              <Button
                variant={`${
                  language.toLowerCase() === "ar" ? "default" : "ghost"
                }`}
                className="justify-start"
                onClick={() => changeLanguage("ar")}
              >
                <span>العربية</span>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default DesktopNav;
