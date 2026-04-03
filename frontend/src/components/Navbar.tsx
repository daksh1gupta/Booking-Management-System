import { motion } from "framer-motion";
import { Plane, Home, Ticket, LogOut, Mic } from "lucide-react";

interface NavbarProps {
  onLogout: () => void;
  onMicClick: () => void;
}

const Navbar = ({ onLogout, onMicClick }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 glass-dark"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Plane className="w-7 h-7 text-primary-foreground" />
          <span className="text-xl font-bold text-primary-foreground">FlightX</span>
        </div>

        <div className="flex items-center gap-6">
          <NavItem icon={<Home className="w-4 h-4" />} label="Home" />
          <NavItem icon={<Ticket className="w-4 h-4" />} label="My Bookings" />
          <button
            onClick={onMicClick}
            className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-gold transition-colors"
          >
            <Mic className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:inline">AI</span>
          </button>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-destructive transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <button className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
    {icon}
    <span className="text-sm font-medium hidden sm:inline">{label}</span>
  </button>
);

export default Navbar;
