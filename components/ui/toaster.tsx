"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider data-oid="jjy7now">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="hxw.x95">
            <div className="grid gap-1" data-oid="c39marb">
              {title && <ToastTitle data-oid="cz8r1pi">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="99accky">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="16-abt4" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="swc.fbk" />
    </ToastProvider>
  );
}
