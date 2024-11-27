import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

const EmployeeDocuments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">Document Verification</h1>
          <p className="text-gray-600">Upload and verify your documents</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 text-success mr-2" />
                ID Proof
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Upload a valid government ID (Aadhar, PAN, or Passport)
              </p>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500">
                  Drag and drop your file here, or click to browse
                </p>
                <Button variant="outline" className="mt-4">
                  Upload Document
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 text-destructive mr-2" />
                Employment Proof
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Upload your latest salary slip or employment letter
              </p>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500">
                  Drag and drop your file here, or click to browse
                </p>
                <Button variant="outline" className="mt-4">
                  Upload Document
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDocuments;