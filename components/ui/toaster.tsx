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
    <ToastProvider data-oid="bdjg8t0">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="ybzk7uq">
            <div className="grid gap-1" data-oid="5l5idll">
              {title && <ToastTitle data-oid="z5ickn.">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="nubsmya">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="zwyddm6" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="ucy6bhn" />
    </ToastProvider>
  );
}
