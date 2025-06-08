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
    <ToastProvider data-oid="4jwapng">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid=".dmot2e">
            <div className="grid gap-1" data-oid="e89g:ug">
              {title && <ToastTitle data-oid="_-rkpt4">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="g_mk-0z">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="rb-01dy" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="jjdbyn_" />
    </ToastProvider>
  );
}
