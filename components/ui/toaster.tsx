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
    <ToastProvider data-oid="ni0119y">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="mjlm6po">
            <div className="grid gap-1" data-oid="9xuoxmz">
              {title && <ToastTitle data-oid="culau5p">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="qcd54gh">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="pku23f4" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="5t-d1e4" />
    </ToastProvider>
  );
}
