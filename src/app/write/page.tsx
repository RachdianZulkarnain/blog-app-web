import { notFound, redirect } from "next/navigation";
import WritePage from "./components/WritePage";
import { auth } from "@/auth";

const Write = async () => {
  const session = await auth();

  if (!session?.user) return notFound();

  return <WritePage />;
};

export default Write;
