import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

function normalizeRedirectPath(redirectPath: string) {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

  if (!redirectPath) {
    return "/";
  }

  const path = redirectPath.startsWith("/") ? redirectPath : `/${redirectPath}`;

  if (basePath && path.startsWith(basePath)) {
    return path.slice(basePath.length - 1) || "/";
  }

  return path;
}

const redirectPath = sessionStorage.getItem("redirect");

if (redirectPath) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", normalizeRedirectPath(redirectPath));
}

const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
