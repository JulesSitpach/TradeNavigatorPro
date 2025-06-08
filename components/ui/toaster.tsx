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
    <ToastProvider data-oid="t:0d3wt">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="e_c985m">
            <div className="grid gap-1" data-oid="zko3.dg">
              {title && <ToastTitle data-oid="5tjd4m5">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="e27.kpi">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="0zv5a-j" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="fjr1tm5" />
    </ToastProvider>
  );
}
