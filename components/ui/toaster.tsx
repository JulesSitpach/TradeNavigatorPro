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
    <ToastProvider data-oid="resy0j-">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="fpu5hm5">
            <div className="grid gap-1" data-oid="3uvli:6">
              {title && <ToastTitle data-oid="8w1:ga8">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="bl15kdd">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid=".aqk0ff" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="jr4s:.l" />
    </ToastProvider>
  );
}
