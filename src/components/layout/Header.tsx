import { Search, Bell, User, LayoutGrid } from 'lucide-react';

export const Header = () => {
    return (
        <header className="h-20 bg-[#f8fafc]/60 backdrop-blur-xl border-b border-slate-200/50 flex items-center justify-between px-10 shrink-0 sticky top-0 z-40">
            <div className="flex-1 max-w-xl relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 transition-colors group-focus-within:text-emerald-500" />
                <input
                    type="text"
                    placeholder="Search smart database..."
                    className="w-full pl-12 pr-6 py-2.5 bg-white/50 border border-slate-200 rounded-2xl text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/50 focus:bg-white transition-all shadow-sm"
                />
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <button className="p-2.5 text-slate-500 hover:bg-emerald-500/10 hover:text-emerald-600 rounded-xl relative transition-all duration-300">
                        <Bell className="w-5.5 h-5.5" />
                        <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#f8fafc] animate-pulse"></span>
                    </button>
                    <button className="p-2.5 text-slate-500 hover:bg-blue-500/10 hover:text-blue-600 rounded-xl transition-all duration-300">
                        <LayoutGrid className="w-5.5 h-5.5" />
                    </button>
                </div>

                <div className="h-8 w-px bg-slate-200/60 mx-1"></div>

                <div className="flex items-center gap-4 pl-2 group cursor-pointer p-1 rounded-2xl hover:bg-white transition-all duration-300 pr-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-slate-100 to-slate-200 flex items-center justify-center border border-slate-200/50 group-hover:border-emerald-500/30 shadow-sm transition-all overflow-hidden relative">
                        <User className="w-7 h-7 text-slate-500 mt-2" />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-200/50 to-transparent"></div>
                    </div>
                    <div className="text-left hidden lg:block leading-tight">
                        <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Admin Portal</p>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Chief Credit Officer</p>
                    </div>
                </div>
            </div>
        </header>
    );
};
