import { useLocation, Outlet } from "@tanstack/react-router";

export function RouteTransition() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="route-transition">
      <Outlet />
    </div>
  );
}
