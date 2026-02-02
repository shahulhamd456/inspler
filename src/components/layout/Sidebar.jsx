import React from 'react';
import { Link as LinkIcon, LayoutGrid, BarChart2, Settings, Sidebar as SidebarIcon } from 'lucide-react';
import clsx from 'clsx';

export function Sidebar() {
    const menuItems = [
        { icon: LinkIcon, label: 'Link', active: true },
        { icon: LayoutGrid, label: 'Appearance' },
        { icon: BarChart2, label: 'Analytics' },
        { icon: Settings, label: 'Settings' },
    ];

    return (
        <aside className="w-64 bg-gray-50/50 hidden md:flex flex-col p-6 h-screen sticky top-0 font-sans shrink-0">

            <div className="flex items-center justify-between mb-8 px-2">
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <button className="text-gray-400 hover:text-gray-600 bg-white p-1.5 rounded-lg shadow-sm border border-gray-100">
                    <SidebarIcon size={18} />
                </button>
            </div>

            <nav className="space-y-3 flex-1">
                {menuItems.map((item) => (
                    <button
                        key={item.label}
                        className={clsx(
                            "w-full flex items-center gap-3 px-2 py-2 rounded-full transition-all font-bold text-sm",
                            item.active
                                ? "bg-[#6366F1] text-white shadow-xl shadow-indigo-200 pl-2 pr-6"
                                : "text-gray-500 hover:text-gray-900 px-4"
                        )}
                    >
                        <div className={clsx(
                            "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
                            item.active ? "bg-white text-[#6366F1]" : "bg-transparent text-gray-400"
                        )}>
                            <item.icon size={20} strokeWidth={item.active ? 2.5 : 2} />
                        </div>
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
}
