import React from 'react';
import {
    Plus,
    Filter,
    TrendingUp,
    Clock,
    AlertCircle,
    MoreHorizontal,
    ArrowUpRight,
    ArrowDownRight,
    Search
} from 'lucide-react';
import { cn } from '../lib/utils';

const stats = [
    {
        label: 'Total Portfolio',
        value: 'GH₵ 4.85M',
        change: '+14.2%',
        trend: 'up',
        icon: TrendingUp,
        color: 'text-emerald-600',
        bg: 'bg-emerald-500/10',
        gradient: 'from-emerald-500/20 to-transparent'
    },
    {
        label: 'Disbursed Monthly',
        value: 'GH₵ 842.5K',
        change: '+2.4%',
        trend: 'up',
        icon: Clock,
        color: 'text-blue-600',
        bg: 'bg-blue-500/10',
        gradient: 'from-blue-500/20 to-transparent'
    },
    {
        label: 'At Risk (PAR > 30)',
        value: '14.5%',
        change: '-0.8%',
        trend: 'down',
        icon: AlertCircle,
        color: 'text-rose-600',
        bg: 'bg-rose-500/10',
        gradient: 'from-rose-500/20 to-transparent'
    },
];

const mockLoans = [
    { id: 'SKP-7742', client: 'Kofi Mensah', principal: 'GH₵ 25,000', balance: 'GH₵ 12,400', status: 'Active', color: 'emerald', progress: 65, date: '2024-02-01' },
    { id: 'SKP-8123', client: 'Ama Serwaa', principal: 'GH₵ 120,000', balance: 'GH₵ 120,000', status: 'Pending', color: 'blue', progress: 0, date: '2024-02-03' },
    { id: 'SKP-9904', client: 'Yao Boateng', principal: 'GH₵ 15,500', balance: 'GH₵ 3,250', status: 'Active', color: 'emerald', progress: 85, date: '2024-02-04' },
    { id: 'SKP-1029', client: 'Edmond Korley', principal: 'GH₵ 5,000', balance: 'GH₵ 5,000', status: 'Pending', color: 'blue', progress: 0, date: '2024-02-05' },
    { id: 'SKP-4451', client: 'Esi Appiah', principal: 'GH₵ 48,000', balance: 'GH₵ 42,000', status: 'Delinquent', color: 'rose', progress: 12, date: '2024-01-15' },
    { id: 'SKP-2234', client: 'Samuel Antwi', principal: 'GH₵ 35,000', balance: 'GH₵ 35,000', status: 'Pending', color: 'amber', progress: 5, date: '2024-02-02' },
];

const AmortizationSchedule = ({ amount }: { amount: string }) => {
    const schedules = [
        { month: 'Month 1', principal: 'GH₵ 380', interest: 'GH₵ 50', total: 'GH₵ 430', balance: 'GH₵ 4,620' },
        { month: 'Month 2', principal: 'GH₵ 385', interest: 'GH₵ 45', total: 'GH₵ 430', balance: 'GH₵ 4,235' },
        { month: 'Month 3', principal: 'GH₵ 390', interest: 'GH₵ 40', total: 'GH₵ 430', balance: 'GH₵ 3,845' },
        { month: 'Month 4', principal: 'GH₵ 395', interest: 'GH₵ 35', total: 'GH₵ 430', balance: 'GH₵ 3,450' },
    ];

    return (
        <div className="mt-8 bg-slate-900 rounded-[2rem] p-8 text-white animate-in slide-in-from-top duration-500">
            <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-emerald-400" />
                Amortization Schedule - {amount}
            </h3>
            <div className="grid grid-cols-5 gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 px-4">
                <span>Period</span>
                <span>Principal</span>
                <span>Interest</span>
                <span>Total Payment</span>
                <span>Remaining</span>
            </div>
            <div className="space-y-3">
                {schedules.map((s, i) => (
                    <div key={i} className="grid grid-cols-5 gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                        <span className="font-bold">{s.month}</span>
                        <span className="text-slate-300">{s.principal}</span>
                        <span className="text-emerald-400">{s.interest}</span>
                        <span className="font-black">{s.total}</span>
                        <span className="text-slate-300">{s.balance}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Loans = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filterStatus, setFilterStatus] = React.useState('All');
    const [showSchedule, setShowSchedule] = React.useState<string | null>(null);
    const [approvedLoans, setApprovedLoans] = React.useState<string[]>([]);

    const filteredLoans = mockLoans.map(loan => {
        if (approvedLoans.includes(loan.id)) {
            return { ...loan, status: 'Active' as const, color: 'emerald' };
        }
        return loan;
    }).filter(loan => {
        const matchesSearch = loan.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
            loan.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'All' || loan.status === filterStatus;
        return matchesSearch && matchesStatus;
    });
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                        Loan Management
                        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded-lg">Real-time</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-1">Configure, monitor and approve credit facilities effortlessly.</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 bg-white text-slate-700 font-bold rounded-2xl hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
                        <ArrowUpRight className="w-4.5 h-4.5 text-emerald-500" />
                        <span>Loan Top-up</span>
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300">
                        <Plus className="w-5 h-5" />
                        <span>Create Loan</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-7 rounded-[2rem] border border-slate-200/60 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                        <div className={cn("absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-50 transition-opacity group-hover:opacity-80", stat.gradient)}></div>
                        <div className="relative flex flex-col h-full">
                            <div className="flex items-center justify-between mb-6">
                                <div className={cn("p-4 rounded-2xl shadow-sm", stat.bg)}>
                                    <stat.icon className={cn("w-6 h-6", stat.color)} />
                                </div>
                                <div className={cn(
                                    "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black tracking-tight",
                                    stat.trend === 'up' ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
                                )}>
                                    {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                    {stat.change}
                                </div>
                            </div>
                            <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{stat.label}</p>
                            <h3 className="text-3xl font-black text-slate-900 mt-2 tracking-tighter">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass rounded-[2.5rem] p-4 flex flex-col">
                <div className="p-6 border-b border-slate-200/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2bg-slate-100 rounded-lg">
                            <Search className="w-5 h-5 text-slate-400" />
                        </div>
                        <h2 className="text-lg font-black text-slate-900 tracking-tight">Portfolio Activity</h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search loans..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-11 pr-4 py-2.5 bg-slate-100/50 border-none rounded-2xl text-sm font-bold text-slate-600 focus:ring-2 focus:ring-emerald-500/20 transition-all w-64"
                            />
                        </div>
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="pl-9 pr-10 py-2.5 bg-slate-100/50 border-none rounded-2xl text-sm font-bold text-slate-600 focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none cursor-pointer min-w-[160px]"
                            >
                                <option value="All">All Statuses</option>
                                <option value="Active">Active</option>
                                <option value="Pending">Pending</option>
                                <option value="Delinquent">Delinquent</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto px-2">
                    <table className="w-full text-left border-separate border-spacing-y-2">
                        <thead>
                            <tr className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                <th className="px-6 py-4">Transaction ID</th>
                                <th className="px-6 py-4">Client Portfolio</th>
                                <th className="px-6 py-4">Valuation</th>
                                <th className="px-6 py-4">Outstanding</th>
                                <th className="px-6 py-4">Repayment Progress</th>
                                <th className="px-6 py-4">Status Registry</th>
                                <th className="px-6 py-4 text-right">Verification</th>
                            </tr>
                        </thead>
                        <tbody className="before:block before:h-2">
                            {filteredLoans.map((loan) => (
                                <tr key={loan.id} className="group bg-white/40 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 rounded-3xl cursor-pointer">
                                    <td className="px-6 py-6 first:rounded-l-3xl border-y border-l border-slate-200/30 group-hover:border-slate-300/50">
                                        <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">{loan.id}</span>
                                    </td>
                                    <td className="px-6 py-6 border-y border-slate-200/30 group-hover:border-slate-300/50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs text-center leading-none">
                                                {loan.client.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span className="text-sm font-bold text-slate-900">{loan.client}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 border-y border-slate-200/30 group-hover:border-slate-300/50">
                                        <span className="text-sm font-medium text-slate-600">{loan.principal}</span>
                                    </td>
                                    <td className="px-6 py-6 border-y border-slate-200/30 group-hover:border-slate-300/50">
                                        <span className="text-sm font-black text-slate-900">{loan.balance}</span>
                                    </td>
                                    <td className="px-6 py-6 border-y border-slate-200/30 group-hover:border-slate-300/50 min-w-[140px]">
                                        <div className="flex flex-col gap-2">
                                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div
                                                    className={cn("h-full rounded-full transition-all duration-1000", `bg-${loan.color}-500 shadow-[0_0_8px_rgba(var(--color-${loan.color}-500),0.5)]`)}
                                                    style={{ width: `${loan.progress}%`, backgroundColor: loan.color === 'emerald' ? '#10b981' : loan.color === 'blue' ? '#3b82f6' : loan.color === 'rose' ? '#f43f5e' : '#f59e0b' }}
                                                ></div>
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-400 right-0 ml-auto">{loan.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 border-y border-slate-200/30 group-hover:border-slate-300/50">
                                        <span className={cn(
                                            "text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl border-2 transition-colors",
                                            loan.status === 'Active' && "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
                                            loan.status === 'Pending' && "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
                                            loan.status === 'Delinquent' && "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500",
                                            loan.status === 'Approved' && "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500",
                                        )}>
                                            {loan.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-6 last:rounded-r-3xl border-y border-r border-slate-200/30 group-hover:border-slate-300/50 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            {loan.status === 'Pending' ? (
                                                <button
                                                    onClick={() => {
                                                        setApprovedLoans([...approvedLoans, loan.id]);
                                                        setShowSchedule(loan.principal);
                                                    }}
                                                    className="px-4 py-2 bg-emerald-500 text-white rounded-xl font-bold text-xs hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
                                                >
                                                    Approve Loan
                                                </button>
                                            ) : (
                                                <button className="px-4 py-2 bg-slate-50 text-slate-400 hover:bg-emerald-500 hover:text-white rounded-xl font-bold text-xs transition-all duration-300">
                                                    Reschedule
                                                </button>
                                            )}
                                            <button className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                                                <MoreHorizontal className="w-4 h-4 text-slate-400" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-8 mt-2 flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-400">Showing <span className="text-slate-900">5</span> of <span className="text-slate-900">1,240</span> active records</p>
                    <div className="flex gap-3">
                        <button className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded-xl text-slate-400 hover:bg-white hover:text-slate-900 hover:shadow-lg transition-all">
                            <ArrowDownRight className="w-4 h-4 rotate-135" />
                        </button>
                        {[1, 2, 3].map(i => (
                            <button key={i} className={cn(
                                "w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm transition-all",
                                i === 1 ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20" : "text-slate-400 hover:bg-white hover:text-slate-900"
                            )}>
                                {i}
                            </button>
                        ))}
                        <button className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded-xl text-slate-400 hover:bg-white hover:text-slate-900 hover:shadow-lg transition-all">
                            <ArrowUpRight className="w-4 h-4 rotate-45" />
                        </button>
                    </div>
                </div>
            </div>

            {showSchedule && <AmortizationSchedule amount={showSchedule} />}
        </div>
    );
};
