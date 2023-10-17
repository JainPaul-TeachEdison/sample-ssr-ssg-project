import Link from "next/link";

const Dashboard = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-semibold text-2xl">Dashboard</div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/form">
                <p className="text-white-500 hover:underline">Go to Form</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Dashboard;
