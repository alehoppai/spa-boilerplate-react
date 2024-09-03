import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const Root = () => {
  return (
    <div className="w-full h-full min-h-screen p-6 bg-white text-black dark:bg-black dark:text-white flex flex-col">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
};

export const Route = createRootRoute({
  component: Root,
});
