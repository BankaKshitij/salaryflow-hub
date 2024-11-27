import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import EmployeeDashboard from "./pages/employee/Dashboard";
import EmployeeDocuments from "./pages/employee/Documents";
import WithdrawFunds from "./pages/employee/WithdrawFunds";
import EmployerDashboard from "./pages/employer/Dashboard";
import EmployerTeams from "./pages/employer/Teams";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminOrganizations from "./pages/admin/Organizations";
import AdminRequests from "./pages/admin/Requests";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
            <Route path="/employee/documents" element={<EmployeeDocuments />} />
            <Route path="/employee/withdraw" element={<WithdrawFunds />} />
            <Route path="/employer/dashboard" element={<EmployerDashboard />} />
            <Route path="/employer/teams" element={<EmployerTeams />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/organizations" element={<AdminOrganizations />} />
            <Route path="/admin/requests" element={<AdminRequests />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;