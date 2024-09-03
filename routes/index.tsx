import { createFileRoute } from "@tanstack/react-router";

const IndexPage = () => {
  return <h1>Index</h1>;
};

export const Route = createFileRoute("/")({
  component: IndexPage,
});
