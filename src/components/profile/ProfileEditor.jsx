import React from 'react';
import { useLinks } from '../../context/LinkContext';
import { Share2, Plus, Copy, ExternalLink, Bell, Search, ChevronDown, Send, Instagram, Linkedin, Link as LinkIcon } from 'lucide-react';

export function ProfileEditor() {
    const { profile, setProfile } = useLinks();

    return (
        <div className="mb-4 md:mb-8 font-sans">
            {/* Banner Container */}
            <div className="hidden md:block relative w-full h-[220px] rounded-t-[2.5rem] overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-indigo-900/10"></div>
                </div>
            </div>

            {/* Floating Card */}
            <div className="relative mt-0 md:-mt-16 mx-0 md:mx-6 bg-white rounded-[1.5rem] shadow-none md:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-none md:border border-gray-100 p-4 md:p-6 lg:p-4 xl:p-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-4 xl:gap-8 z-10 transition-all">

                {/* Left Section: Avatar & Info (Desktop Only) */}
                <div className="hidden md:flex items-center gap-6 lg:gap-4 xl:gap-6 w-full lg:w-auto justify-center lg:justify-start shrink-0">
                    {/* Avatar */}
                    <div className="w-24 h-24 lg:w-20 lg:h-20 xl:w-28 xl:h-28 rounded-full p-1 bg-white shadow-sm shrink-0 relative group cursor-pointer">
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        const updatedProfile = { ...profile, avatar: reader.result };
                                        setProfile(updatedProfile);
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1e1b4b] to-[#4338ca] flex items-center justify-center text-white relative overflow-hidden">
                            {profile.avatar ? (
                                <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex flex-col items-center justify-center leading-none">
                                    <span className="text-3xl lg:text-xl xl:text-3xl mb-1 drop-shadow-md">🐝</span>
                                    <span className="text-[10px] lg:text-[8px] xl:text-[10px] font-bold tracking-[0.2em] uppercase opacity-90">INSPLER</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Text Info */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl lg:text-2xl xl:text-3xl font-bold text-gray-900 tracking-tight">Inspler</h1>
                        <p className="text-gray-500 font-medium text-sm lg:text-xs xl:text-sm mt-0.5">eCommerce & Digital Marketing</p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 lg:gap-2 xl:gap-3 mt-4 lg:mt-3 xl:mt-4">
                            <button className="w-8 h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-900">
                                <Instagram size={16} className="lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
                            </button>
                            <button className="w-8 h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-900">
                                <Linkedin size={16} strokeWidth={0} fill="currentColor" className="lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
                            </button>
                            <button className="w-8 h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-full border border-dashed border-gray-300 text-gray-400 flex items-center justify-center hover:border-gray-500 hover:text-gray-600 transition-colors">
                                <Plus size={18} className="lg:w-4 lg:h-4 xl:w-[18px]" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider (Desktop Only - lg+) */}
                <div className="hidden lg:block w-px h-24 lg:h-20 xl:h-24 bg-gray-200 mx-2 lg:mx-4 xl:mx-2"></div>

                {/* Right Section / Mobile Bottom Section */}
                <div className="flex-1 w-full lg:w-auto min-w-0">
                    {/* Desktop: Link Info Style */}
                    <div className="hidden md:block">
                        <div className="flex items-center justify-between mb-2 lg:mb-1.5 xl:mb-2">
                            <span className="text-sm lg:text-xs xl:text-sm font-bold text-gray-900">mymee link</span>
                            <button className="text-xs lg:text-[10px] xl:text-xs font-bold text-indigo-600 flex items-center gap-1 hover:underline">
                                customize Url <ExternalLink size={10} />
                            </button>
                        </div>
                        <div className="flex items-center gap-2 lg:gap-3">
                            <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-3 lg:px-3 xl:px-4 py-3 lg:py-2 xl:py-3 flex items-center gap-2 text-gray-600 min-w-0">
                                <span className="text-indigo-400 shrink-0"><LinkIcon size={16} className="lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" /></span>
                                <span className="text-sm lg:text-xs xl:text-sm font-medium truncate">https://mymee.link/inspler</span>
                            </div>
                            <div className="flex items-center gap-1.5 lg:gap-2 shrink-0">
                                <button className="w-10 h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                                    <Copy size={18} className="lg:w-4 lg:h-4 xl:w-[18px]" />
                                </button>
                                <button className="w-10 h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                                    <ExternalLink size={18} className="lg:w-4 lg:h-4 xl:w-[18px]" />
                                </button>
                                <button className="h-10 lg:h-9 xl:h-11 px-3 lg:px-4 xl:px-6 bg-[#6366F1] hover:bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-200 transition-all active:scale-95 whitespace-nowrap">
                                    <Send size={16} className="fill-current lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
                                    <span className="hidden xl:inline lg:text-xs xl:text-sm">share Url</span>
                                    <span className="inline xl:hidden text-xs">Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Specific Header Layout (Overriding default float card for mobile) */}
                <div className="md:hidden w-full">
                    {/* URL Bar */}
                    <div className="flex items-center gap-2 w-full bg-gray-50 rounded-lg p-2 mb-4 border border-gray-100">
                        <div className="bg-purple-100 p-1.5 rounded-lg text-purple-600 shrink-0">
                            <LinkIcon size={16} />
                        </div>
                        <span className="text-xs font-medium text-gray-600 truncate flex-1 leading-none pt-0.5">https://mymee.link/inspler</span>
                        <div className="h-4 w-px bg-gray-300 mx-1"></div>
                        <button className="p-1 hover:bg-gray-200 rounded text-gray-500 shrink-0">
                            <Copy size={16} />
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {/* Small Avatar */}
                            <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-br from-[#1e1b4b] to-[#4338ca] shrink-0">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                    {profile.avatar ? (
                                        <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-2xl">🐝</span>
                                    )}
                                </div>
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-gray-900 leading-tight">Inspler</h1>
                                <p className="text-[10px] text-gray-500 font-medium">eCommerce & Digital Marketing</p>
                                <div className="flex items-center gap-2 mt-1.5 text-gray-600">
                                    <Instagram size={14} />
                                    <Linkedin size={14} strokeWidth={0} fill="currentColor" />
                                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[10px] text-gray-400">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="bg-[#6366F1] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md shadow-indigo-200">
                            share Url
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
