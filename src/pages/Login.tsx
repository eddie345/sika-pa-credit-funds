import React from 'react';
import { CreditCard, Lock, Mail, ArrowRight } from 'lucide-react';

export const Login = ({ onLogin }: { onLogin: () => void }) => {
    const [email, setEmail] = React.useState('admin@sikapa.com');
    const [password, setPassword] = React.useState('password');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>

            <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
                <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-200/50 p-10 relative overflow-hidden">
                    <div className="flex flex-col items-center mb-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30 mb-6">
                            <CreditCard className="text-white w-8 h-8" />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Sika Pa</h1>
                        <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">Admin Portal Access</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/50 transition-all outline-none font-medium text-slate-700"
                                    placeholder="admin@sikapa.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-wider ml-1">Secure Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/50 transition-all outline-none font-medium text-slate-700"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/20 transition-all active:scale-95 group"
                        >
                            <span>Authenticate Access</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="text-center text-slate-400 text-sm mt-8 font-medium">
                        Secured by <span className="text-slate-900 font-bold">Panthera Protocol</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
