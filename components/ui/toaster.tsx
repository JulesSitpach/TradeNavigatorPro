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
    <ToastProvider data-oid="p.eus1b">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="nab4:ho">
            <div className="grid gap-1" data-oid="ho:k00c">
              {title && <ToastTitle data-oid="vxbg:wy">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="mn5g8pe">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="tvpdzrf" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="-:amy90" />
    </ToastProvider>
  );
}
