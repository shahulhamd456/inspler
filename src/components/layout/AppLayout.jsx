import React from 'react';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { Bell, Search, ChevronDown, AlignJustify, Menu } from 'lucide-react';
import { useLinks } from '../../context/LinkContext';
import Logo from '../../assets/inspler-logo.png';

export function AppLayout({ children, mobileView, onMobileViewChange }) {
    const { profile } = useLinks();
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900 max-w-screen-2xl mx-auto shadow-xl my-0 xl:my-4 xl:rounded-3xl overflow-hidden border border-gray-100">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className="flex-1 flex flex-col min-w-0 mb-20 md:mb-0 relative">
                {/* Desktop Header Items */}
                <div className="hidden xl:flex absolute top-6 right-8 items-center gap-4 z-20">
                    <button className="relative text-gray-600 hover:text-gray-900 group">
                        <Bell size={20} className="group-hover:animate-swing" />
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                        <Search size={20} />
                    </button>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <div className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center p-0.5 shadow-sm overflow-hidden">
                            {profile.avatar ? (
                                <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover rounded-full" />
                            ) : (
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                    <img src={Logo} alt="Inspler" className="w-full h-full object-contain p-1" />
                                </div>
                            )}
                        </div>
                        <ChevronDown size={14} className="text-gray-500" />
                    </div>
                </div>

                <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 px-5 py-3 xl:hidden flex items-center justify-between">
                    <button onClick={toggleSidebar} className="p-1 -ml-1 text-gray-700">
                        <Menu size={24} strokeWidth={2} />
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Bell size={20} className="text-gray-700" />
                            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </div>
                        <Search size={22} className="text-gray-700" />
                        <div className="w-8 h-8 rounded-full border border-purple-200 flex items-center justify-center p-0.5">
                            <img src={Logo} alt="Inspler" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 p-4 md:p-8 xl:pt-20 max-w-5xl xl:max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </main>


            <MobileNav currentView={mobileView} onViewChange={onMobileViewChange} />
        </div>
    );
}
