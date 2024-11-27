import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Info } from "lucide-react";
import { toast } from "sonner";

const WithdrawFunds = () => {
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    console.log("Withdrawing amount:", amount);
    toast.success("Withdrawal request submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">Withdraw Funds</h1>
          <p className="text-gray-600">Request early salary withdrawal</p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="bg-white shadow-sm mb-6">
            <CardHeader>
              <CardTitle>Available Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">₹45,000</div>
              <div className="text-sm text-gray-500">Maximum withdrawal: ₹15,000</div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Withdrawal Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Enter Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount to withdraw"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div className="bg-secondary/10 p-4 rounded-lg flex items-start space-x-2">
                  <Info className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-secondary">Processing Fee</p>
                    <p className="text-gray-600">
                      A small processing fee of 2% will be charged on the withdrawal amount.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleWithdraw}
                  className="w-full bg-secondary hover:bg-secondary/90"
                >
                  Confirm Withdrawal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WithdrawFunds;