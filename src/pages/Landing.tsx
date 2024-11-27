import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Building2, Users, UserCog } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Welcome to Nestfin</h1>
          <p className="text-xl mb-8">Your Trusted Salary Credit Portal</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Employees",
              description: "Access your salary credits and manage withdrawals",
              icon: Users,
              path: "/auth/login?role=employee",
            },
            {
              title: "Employers",
              description: "Manage your team and track credit requests",
              icon: Building2,
              path: "/auth/login?role=employer",
            },
            {
              title: "Administrators",
              description: "Oversee organizations and monitor requests",
              icon: UserCog,
              path: "/auth/login?role=admin",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="text-primary mb-4">
                <item.icon size={48} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary">{item.title}</h2>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <Button
                onClick={() => navigate(item.path)}
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;