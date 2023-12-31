import Nav from "@/components/Nav";

export default function Layout({children}) {
  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-1 mr-1 mb-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
}
