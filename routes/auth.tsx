import { createFileRoute } from "@tanstack/react-router";

const AuthPage = () => {
  return <h1>Auth page</h1>;
};

export const Route = createFileRoute("/auth")({
  component: AuthPage,
});
