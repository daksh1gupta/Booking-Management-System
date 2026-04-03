import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Search } from "lucide-react";

const SearchBox = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="relative z-10 -mt-24 mx-auto max-w-5xl px-6"
    >
      <div className="glass rounded-2xl p-6 md:p-8">
        <h3 className="text-primary-foreground text-lg font-semibold mb-6">Search Flights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <InputField icon={<MapPin className="w-5 h-5" />} placeholder="From" value={from} onChange={setFrom} />
          <InputField icon={<MapPin className="w-5 h-5" />} placeholder="To" value={to} onChange={setTo} />
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
            />
          </div>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all appearance-none"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n} className="text-foreground">{n} Passenger{n > 1 ? "s" : ""}</option>
              ))}
            </select>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 py-3 rounded-lg bg-gold text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Search className="w-5 h-5" />
            Search
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const InputField = ({
  icon,
  placeholder,
  value,
  onChange,
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-11 pr-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
    />
  </div>
);

export default SearchBox;
