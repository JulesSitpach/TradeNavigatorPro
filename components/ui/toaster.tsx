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
    <ToastProvider data-oid="p-ou0l4">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="86c0a.d">
            <div className="grid gap-1" data-oid="5c9vbnv">
              {title && <ToastTitle data-oid="gjs2kmu">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="wkvznaq">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="pzst6c5" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="7eo0565" />
    </ToastProvider>
  );
}
