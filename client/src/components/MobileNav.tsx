"use client";

import React, { useState } from "react";
import Link from "next/link";

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

import { navItems } from "@/constants";
import { AlignJustify, XIcon } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="p-2 px-4">
            <div className="flex justify-end">
              <DrawerClose onClick={() => setIsOpen(false)}>
                <XIcon />
              </DrawerClose>
            </div>
            <div className="mt-5 gap-4 flex flex-col">
              {navItems.map((navItem) => (
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
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNav;
