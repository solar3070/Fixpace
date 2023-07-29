import ErrorFallback from "@/components/common/ErrorFallback";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";

function RetryErrorBoundary({ children }: PropsWithChildren) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default RetryErrorBoundary;
