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

function getRedirectPath() {
  try {
    return sessionStorage.getItem("redirect");
  } catch {
    return null;
  }
}

function applyRedirect() {
  const redirectPath = getRedirectPath();

  if (!redirectPath) {
    return;
  }

  try {
    sessionStorage.removeItem("redirect");
    window.history.replaceState(null, "", normalizeRedirectPath(redirectPath));
  } catch {
    // Ignore redirect errors and continue with the current URL.
  }
}

function renderFallback(message: string) {
  const root = document.getElementById("root");

  if (!root) {
    return;
  }

  root.innerHTML = `
    <div style="min-height:100vh;display:grid;place-items:center;padding:2rem;background:#0c1220;color:#fff;font-family:Arial,sans-serif;">
      <div style="max-width:640px;text-align:center;border:1px solid rgba(245,196,78,0.3);padding:2rem;border-radius:24px;background:rgba(12,18,32,0.95);">
        <p style="text-transform:uppercase;letter-spacing:0.3em;color:#f5c44e;font-size:0.78rem;">Rei do Malte</p>
        <h1 style="font-size:1.8rem;margin:1rem 0;">Não foi possível carregar a página</h1>
        <p style="line-height:1.7;color:#d8d8d8;">${message}</p>
        <p style="margin-top:1.5rem;color:#f5c44e;">Tente recarregar a página ou voltar ao início.</p>
      </div>
    </div>
  `;
}

applyRedirect();

const router = getRouter();
const root = document.getElementById("root");

if (!root) {
  console.error("Root container not found.");
} else {
  try {
    createRoot(root).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    );
  } catch (error) {
    console.error("Failed to mount app:", error);
    renderFallback("O aplicativo não pôde ser inicializado. Recarregue a página para tentar novamente.");
  }
}
