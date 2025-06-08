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
    <ToastProvider data-oid="qksc:cy">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="18t0h5t">
            <div className="grid gap-1" data-oid="wj3y4uj">
              {title && <ToastTitle data-oid="p.n-hju">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="0:-:r..">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="8dwn_kn" />
          </Toast>
        );
      })}
      <ToastViewport data-oid=":nyx_u3" />
    </ToastProvider>
  );
}
