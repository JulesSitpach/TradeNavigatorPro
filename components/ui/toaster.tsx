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
    <ToastProvider data-oid="smb8fg_">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="974z0-a">
            <div className="grid gap-1" data-oid="igunm5v">
              {title && <ToastTitle data-oid="25stds3">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="-g8ynbb">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="sgad4kb" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="3-jgdsn" />
    </ToastProvider>
  );
}
