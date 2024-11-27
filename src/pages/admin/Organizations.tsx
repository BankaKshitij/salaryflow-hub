import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, Settings } from "lucide-react";

const AdminOrganizations = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">Organizations</h1>
          <p className="text-gray-600">Manage registered organizations</p>
        </div>

        <Card className="bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Organization Directory</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search organizations..."
                    className="pl-10 w-64"
                  />
                </div>
                <Button className="bg-secondary hover:bg-secondary/90">
                  Export List
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Organization Name</TableHead>
                  <TableHead>Organization ID</TableHead>
                  <TableHead>Employees</TableHead>
                  <TableHead>Total Disbursed</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">Tech Corp</TableCell>
                    <TableCell>ORG{101 + index}</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>₹15,00,000</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">
                        Active
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOrganizations;