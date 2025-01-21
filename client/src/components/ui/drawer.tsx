import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";

const Drawer = ({
  shouldScaleBackground = true,
  open,
  onClose,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & {
  open: boolean;
  onClose: () => void;
}) => (
  <DrawerPrimitive.Root
    open={open}
    onOpenChange={(isOpen) => {
      if (!isOpen) onClose();
    }}
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, onClick, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    onClick={onClick} // Detect click on overlay to close drawer
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay onClick={() => props.onClose?.()} />{" "}
    {/* Close on overlay click */}
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed top-0 right-0 z-50 w-3/4 max-w-full flex h-screen flex-col rounded-t-[5px] border bg-background overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    >
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
};
