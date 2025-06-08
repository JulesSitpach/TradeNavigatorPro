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
    <ToastProvider data-oid="x3sl7pl">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="njda4qt">
            <div className="grid gap-1" data-oid=".47rybz">
              {title && <ToastTitle data-oid="9qn_niy">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="g4qqimb">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="ty.3-2." />
          </Toast>
        );
      })}
      <ToastViewport data-oid="cdqiu48" />
    </ToastProvider>
  );
}
