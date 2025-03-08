"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import { getPathname, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/context/UseLanguage";
// import { navItemsMobile } from "@/constants";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { AlignJustify, XIcon, Globe, ChevronDown } from "lucide-react";

const MobileNav = () => {
  const t = useTranslations("navItemsMobile");
  const navItemsMobile = t.raw("items"); // convert the nav items into array
  const router = useRouter();
  const currentPath = usePathname(); // Get current path without locale

  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // State to control Popover
  const { language, setLanguage } = useLanguage();

  const changeLanguage = (value: string) => {
    setLanguage(value);
    setIsPopoverOpen(false); // Close the popover after selecting a language

    // Generate the new path with the selected locale
    const newPath = getPathname({
      locale: value,
      href: { pathname: currentPath },
    });

    // Navigate to the updated path
    router.push(newPath);
  };

  return (
    <div className="flex lg:hidden">
      <Drawer open={isOpen} onClose={() => setIsOpen(false)} direction="right">
        <DrawerTrigger onClick={() => setIsOpen(true)}>
          <AlignJustify />
        </DrawerTrigger>
        <DrawerContent
          className="bg-[#121519] text-white border-none z-[999]"
          onClose={() => setIsOpen(false)}
        >
          <div className="p-2 px-4 overflow-auto min-h-screen pb-32">
            <div className="flex justify-end">
              <DrawerClose onClick={() => setIsOpen(false)}>
                <XIcon />
              </DrawerClose>
            </div>
            <div className="mt-5 gap-4 flex flex-col">
              {navItemsMobile.map((navItem) => (
                <div key={`${navItem.name}-${navItem.id}`}>
                  {!navItem.sub ? (
                    <DrawerClose onClick={() => setIsOpen(false)}>
                      <Link href={navItem.link} legacyBehavior passHref>
                        <p className="hover:text-[#7456F1] transition-all duration-300">
                          {navItem.name}
                        </p>
                      </Link>
                    </DrawerClose>
                  ) : (
                    <Accordion
                      type="single"
                      collapsible
                      key={`${navItem.name}-${navItem.id}`}
                    >
                      <AccordionItem
                        key={`${navItem.name}-${navItem.id}`}
                        value={navItem.name}
                        className="hover:text-[#7456F1] transition-all duration-200"
                      >
                        <AccordionTrigger>{navItem.name}</AccordionTrigger>
                        {navItem.sub.map((item) => (
                          <AccordionContent
                            key={item.name}
                            className="hover:text-[#7456F1] transition-all duration-200 text-white"
                          >
                            <DrawerClose onClick={() => setIsOpen(false)}>
                              <Link
                                href={item.link.toLocaleLowerCase()}
                                legacyBehavior
                                passHref
                              >
                                {item.name}
                              </Link>
                            </DrawerClose>
                          </AccordionContent>
                        ))}
                      </AccordionItem>
                    </Accordion>
                  )}
                </div>
              ))}
            </div>
            <div className="flex lg:hidden z-[99999] justify-start items-start mt-4">
              <Dialog open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <DialogTrigger className="z-[99999]" asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 z-[99999] bg-transparent focus:bg-transparent hover:bg-transparent"
                  >
                    <Globe className="h-5 w-5" />
                    <span>Language ({language.toUpperCase()})</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DialogTrigger>

                <DialogContent className="p-3 rounded-md w-max z-[999]">
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
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNav;
