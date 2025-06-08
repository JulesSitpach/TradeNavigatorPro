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
    <ToastProvider data-oid="vtdoi8j">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="zmz-.m-">
            <div className="grid gap-1" data-oid=":-v_n9m">
              {title && <ToastTitle data-oid="zqdr2gm">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="-2vh67r">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="572l7:_" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="isrwkan" />
    </ToastProvider>
  );
}
