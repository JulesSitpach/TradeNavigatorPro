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
    <ToastProvider data-oid="teqfxhs">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="_.f_8uw">
            <div className="grid gap-1" data-oid="4:asnpp">
              {title && <ToastTitle data-oid="kae6929">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="r2kvrw.">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="su8nzz1" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="9vzkcyq" />
    </ToastProvider>
  );
}
