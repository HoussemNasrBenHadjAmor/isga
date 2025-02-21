"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/UseLanguage";

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

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

import { navItemsMobile } from "@/constants";
import { AlignJustify, XIcon, Globe, ChevronDown, X } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // State to control Popover
  const { language, setLanguage } = useLanguage();

  const changeLanguage = (value: string) => {
    setLanguage(value);
    setIsPopoverOpen(false);
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
            <div className="flex lg:hidden z-[99999] justify-start items-start pt-2">
              <Dialog open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <DialogTrigger className="z-[99999]" asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 z-[99999] bg-transparent focus:bg-transparent hover:bg-transparent"
                  >
                    <Globe className="h-5 w-5" />
                    <span>Language ({language})</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DialogTrigger>

                <DialogContent className="p-3 rounded-md w-max z-[999]">
                  <div
                    className="grid gap-1 z-[99999]"
                    onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the dialog
                  >
                    <Button
                      variant={`${language === "En" ? "default" : "ghost"}`}
                      onClick={() => changeLanguage("En")}
                    >
                      English
                    </Button>
                    <Button
                      variant={language === "Fr" ? "default" : "ghost"}
                      onClick={() => changeLanguage("Fr")}
                    >
                      Francais
                    </Button>
                    <Button
                      variant={language === "Ar" ? "default" : "ghost"}
                      onClick={() => changeLanguage("Ar")}
                    >
                      العربية
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <Button onClick={() => console.log("Button outside clicked")}>
            Click Me
          </Button>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNav;
