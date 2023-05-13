import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <div>
          <h2>
            Hello. <b>{session?.user?.name}</b>
          </h2>
        </div>
        <div className="flex bg-blue-300 text-black rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="" className="w-9 h-9" />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
