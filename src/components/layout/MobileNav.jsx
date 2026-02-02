import React from 'react';
import { Link as LinkIcon, Smartphone, LayoutGrid, BarChart2 } from 'lucide-react';
import clsx from 'clsx';

export function MobileNav({ currentView, onViewChange }) {
    const items = [
        { id: 'link', icon: LinkIcon, label: 'Link' },
        { id: 'preview', icon: Smartphone, label: 'Preview' },
        { id: 'design', icon: LayoutGrid, label: 'Design' },
        { id: 'analysis', icon: BarChart2, label: 'Analysis' },
    ];

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-3 pb-6 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            {items.map((item) => {
                const isActive = currentView === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => onViewChange && onViewChange(item.id)}
                        className={clsx(
                            "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors min-w-[64px]",
                            isActive ? "text-primary" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        <item.icon size={24} className={clsx(isActive && "fill-current opacity-20 stroke-[2.5px]")} />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </button>
                );
            })}
        </nav>
    );
}
