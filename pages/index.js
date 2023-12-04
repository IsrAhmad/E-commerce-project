import Layout from "@/components/Layout";

export default function Home() {
  return <Layout>
    <div className="text-blue-900 flex justify-between">
      <h2><b>Hello Israa.099@gmail.com</b></h2>
      <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
        <img src="https://staticg.sportskeeda.com/editor/2022/08/abb66-16604053459680.png" alt="profile picture" className="w-10 h-10" />
        <span className="px-2">Israa Ahmad</span>
      </div>
    </div>
  </Layout>
}

