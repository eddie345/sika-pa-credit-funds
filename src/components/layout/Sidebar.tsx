import {
    LayoutDashboard,
    Users,
    FileText,
    PieChart,
    Settings,
    LogOut,
    CreditCard,
    ChevronRight,
} from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: FileText, label: 'Loans', active: true },
    { icon: Users, label: 'Clients', active: false },
    { icon: CreditCard, label: 'Repayments', active: false },
    { icon: PieChart, label: 'Reports', active: false },
    { icon: Settings, label: 'Settings', active: false },
];

export const Sidebar = () => {
    return (
        <aside className="w-72 glass-dark shrink-0 flex flex-col m-4 rounded-2xl relative z-50">
            <div className="p-8">
                <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-400/20">
                        <CreditCard className="text-white w-7 h-7" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-tight leading-none">
                            Sika Pa
                        </h1>
                        <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-[0.1em]">
                            Credit Funds
                        </span>
                    </div>
                </div>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href="#"
                        className={cn(
                            "group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300",
                            item.active
                                ? "bg-emerald-500/15 text-emerald-400 shadow-sm"
                                : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <item.icon className={cn(
                                "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
                                item.active ? "text-emerald-400" : "text-slate-500 group-hover:text-emerald-400"
                            )} />
                            <span className="font-semibold text-[15px]">{item.label}</span>
                        </div>
                        {item.active && <ChevronRight className="w-4 h-4 text-emerald-400" />}
                    </a>
                ))}
            </nav>

            <div className="p-6 mt-auto">
                <div className="bg-slate-800/40 rounded-2xl p-4 mb-6 ring-1 ring-slate-700/50">
                    <p className="text-xs text-slate-500 mb-2 font-medium">Your Daily Quota</p>
                    <div className="h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2">75% of processing limit used</p>
                </div>

                <button className="flex items-center gap-4 px-4 py-3.5 w-full rounded-xl text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-all duration-300 border border-transparent hover:border-rose-500/20">
                    <LogOut className="w-5 h-5" />
                    <span className="font-semibold text-[15px]">Sign Out</span>
                </button>
            </div>
        </aside>
    );
};
