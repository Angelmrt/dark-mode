import type { Route } from "./+types/home";
import Header from "../components/header/Header";
import Main from "../components/main/Main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="bg-body-bg dark:bg-bodyDARK-bg text-black">
    <Header/>
    <Main/>
    </div>
  );
}
