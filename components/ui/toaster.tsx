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
    <ToastProvider data-oid="18av3hd">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="v.fyzu5">
            <div className="grid gap-1" data-oid="_sf2d-z">
              {title && <ToastTitle data-oid="zpyzbm6">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="p0en-i_">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="7:jpio0" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="0n::zu." />
    </ToastProvider>
  );
}
