import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Wallet, Calendar, Clock, ArrowUpRight } from "lucide-react";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">Employee Dashboard</h1>
          <p className="text-gray-600">Welcome back, John Doe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Available Credit
              </CardTitle>
              <Wallet className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹45,000</div>
              <p className="text-xs text-gray-500">Maximum withdrawal: ₹15,000</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Days Worked
              </CardTitle>
              <Calendar className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15 Days</div>
              <p className="text-xs text-gray-500">Current pay period</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Next Payday
              </CardTitle>
              <Clock className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15 Days</div>
              <p className="text-xs text-gray-500">Until next salary credit</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mb-8">
          <Button
            onClick={() => navigate("/employee/withdraw")}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-lg text-lg font-semibold"
          >
            Withdraw Funds
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  date: "2024-02-20",
                  type: "Withdrawal",
                  amount: "₹5,000",
                  status: "Completed",
                },
                {
                  date: "2024-02-15",
                  type: "Salary Credit",
                  amount: "₹45,000",
                  status: "Completed",
                },
                {
                  date: "2024-02-10",
                  type: "Withdrawal",
                  amount: "₹3,000",
                  status: "Completed",
                },
              ].map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{transaction.type}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{transaction.amount}</p>
                    <p className="text-sm text-success">{transaction.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployeeDashboard;