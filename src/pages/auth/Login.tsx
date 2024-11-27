import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { UserRole } from "@/types/auth";
import { toast } from "sonner";

const Login = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") as UserRole || "employee";
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login - Replace with actual API call
    login({
      id: "1",
      email,
      role,
      name: "John Doe",
    });

    console.log("Logging in with:", { email, password, role });
    toast.success("Successfully logged in!");
    
    // Redirect based on role
    switch (role) {
      case "employee":
        navigate("/employee/dashboard");
        break;
      case "employer":
        navigate("/employer/dashboard");
        break;
      case "admin":
        navigate("/admin/dashboard");
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Login as {role.charAt(0).toUpperCase() + role.slice(1)}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
            Login
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Button
            variant="link"
            className="text-secondary p-0"
            onClick={() => navigate(`/auth/signup?role=${role}`)}
          >
            Sign up
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Login;