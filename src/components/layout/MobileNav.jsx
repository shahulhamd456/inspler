import React from 'react';
import { Link as LinkIcon, Smartphone, LayoutGrid, BarChart2 } from 'lucide-react';
import clsx from 'clsx';

export function MobileNav() {
    const items = [
        { icon: LinkIcon, label: 'Link', active: true },
        { icon: Smartphone, label: 'Preview' },
        { icon: LayoutGrid, label: 'Design' },
        { icon: BarChart2, label: 'Analysis' },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-3 pb-6 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            {items.map((item) => (
                <button
                    key={item.label}
                    className={clsx(
                        "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors min-w-[64px]",
                        item.active ? "text-primary" : "text-gray-400 hover:text-gray-600"
                    )}
                >
                    <item.icon size={24} className={clsx(item.active && "fill-current opacity-20 stroke-[2.5px]")} />
                    <span className="text-[10px] font-medium">{item.label}</span>
                </button>
            ))}
        </nav>
    );
}
