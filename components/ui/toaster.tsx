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
    <ToastProvider data-oid="zeyflej">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="v_a:e5i">
            <div className="grid gap-1" data-oid="8kpbtlj">
              {title && <ToastTitle data-oid="8b4qfzn">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="n06lmgp">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid=".-eaak-" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="szer:82" />
    </ToastProvider>
  );
}
