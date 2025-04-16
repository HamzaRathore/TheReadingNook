import React from "react";
import { Card } from "flowbite-react";
import { 
  HiBookOpen, 
  HiUsers, 
  HiCurrencyDollar, 
  HiStar,
  HiChartBar
} from "react-icons/hi";

const Dashboard = () => {
  // Sample data - replace with real data from your API
  const stats = [
    { title: "Total Books", value: "124", icon: HiBookOpen, color: "blue" },
    { title: "Active Users", value: "89", icon: HiUsers, color: "green" },
    
    { title: "Best Sellers", value: "15", icon: HiStar, color: "yellow" }
  ];

  const recentBooks = [
    { id: 1, title: "The Psychology of Money", status: "Active" },
    { id: 2, title: "Atomic Habits", status: "Active" },
    { id: 3, title: "Deep Work", status: "Out of stock" }
  ];

  return (
    <div className="p-10 w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg bg-${stat.color}-100 text-${stat.color}-600 mr-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h3 className="text-xl font-bold">{stat.value}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Books Section */}
      <Card className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Books</h2>
          <button className="text-sm text-blue-600 hover:underline">
            View All
          </button>
        </div>
        <div className="space-y-3">
          {recentBooks.map(book => (
            <div key={book.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
              <span className="font-medium">{book.title}</span>
              <span className={`text-sm px-2 py-1 rounded-full ${
                book.status === "Active" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-red-100 text-red-800"
              }`}>
                {book.status}
              </span>
            </div>
          ))}
        </div>
      </Card>

      
    </div>
  );
};

export default Dashboard;