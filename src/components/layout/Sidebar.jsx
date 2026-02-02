import React from 'react';
import { Link as LinkIcon, LayoutGrid, BarChart2, Settings, Sidebar as SidebarIcon } from 'lucide-react';
import clsx from 'clsx';

export function Sidebar({ isOpen, onClose }) {
    const menuItems = [
        { icon: LinkIcon, label: 'Link', active: true },
        { icon: LayoutGrid, label: 'Appearance' },
        { icon: BarChart2, label: 'Analytics' },
        { icon: Settings, label: 'Settings' },
    ];

    return (
        <>
            {/* Overlay for Mobile/Tablet */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
                    onClick={onClose}
                ></div>
            )}

            <aside className={clsx(
                "w-64 bg-gray-50/50 flex-col p-6 h-screen font-sans shrink-0 transition-transform duration-300 z-50",
                "fixed top-0 left-0 xl:relative xl:transform-none bg-white xl:bg-gray-50/50 shadow-2xl xl:shadow-none border-r xl:border-none border-gray-100",
                isOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0",
                "xl:flex"
            )}>

                <div className="flex items-center justify-between mb-8 px-2">
                    <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 bg-white p-1.5 rounded-lg shadow-sm border border-gray-100 xl:hidden"
                    >
                        <SidebarIcon size={18} />
                    </button>
                    {/* Desktop Collapse Button (Optional, keeping existing style) */}
                    <button className="text-gray-400 hover:text-gray-600 bg-white p-1.5 rounded-lg shadow-sm border border-gray-100 hidden xl:block">
                        <SidebarIcon size={18} />
                    </button>
                </div>

                <nav className="space-y-3 flex-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.label}
                            className={clsx(
                                "w-full flex items-center gap-3 px-2 py-3 rounded-2xl transition-all duration-300 ease-out group border border-transparent",
                                item.active
                                    ? "bg-[#6366F1] text-white shadow-lg shadow-indigo-200 pl-3 pr-6 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-[2px]"
                                    : "text-gray-500 hover:text-indigo-600 hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:border-gray-100 hover:-translate-y-[2px] px-4 hover:pl-5 hover:pr-3"
                            )}
                        >
                            <div className={clsx(
                                "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300",
                                item.active
                                    ? "bg-white text-[#6366F1]"
                                    : "bg-transparent text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:scale-110"
                            )}>
                                <item.icon size={20} strokeWidth={item.active ? 2.5 : 2} className="transition-transform duration-300" />
                            </div>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    );
}
