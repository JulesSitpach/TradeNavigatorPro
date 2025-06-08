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
    <ToastProvider data-oid="cx5:o_d">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid=":falg8s">
            <div className="grid gap-1" data-oid="8ml6u05">
              {title && <ToastTitle data-oid="ge7xkig">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="6:f0wyx">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="3ol870:" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="xmx9xl." />
    </ToastProvider>
  );
}
