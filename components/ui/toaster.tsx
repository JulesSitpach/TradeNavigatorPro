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
    <ToastProvider data-oid="ct1s3rj">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="rkdc_1m">
            <div className="grid gap-1" data-oid="1f8tjr2">
              {title && <ToastTitle data-oid="9rlcggq">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="twvu3ug">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="th1tear" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="qta-fu6" />
    </ToastProvider>
  );
}
