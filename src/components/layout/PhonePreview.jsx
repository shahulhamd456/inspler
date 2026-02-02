import React from 'react';
import { Smartphone, ArrowRight, Instagram, Linkedin, Phone, MessageCircle, MoreVertical } from 'lucide-react';
import { useLinks } from '../../context/LinkContext';

export function PhonePreview() {
    const { profile, links } = useLinks();
    const visibleLinks = links.filter(l => l.visible);

    return (
        <div className="hidden lg:flex flex-col items-center bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6 sticky top-6 h-fit min-w-[320px]">
            <div className="w-full flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Preview</h2>
                <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:underline">
                    customize Url <ArrowRight size={14} />
                </button>
            </div>

            <div className="relative border-gray-900 border-[12px] rounded-[3rem] h-[640px] w-[320px] bg-white overflow-hidden shadow-2xl ring-4 ring-gray-900/5 select-none">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-2xl z-20"></div>

                {/* Screen Content */}
                <div className="w-full h-full bg-white overflow-y-auto no-scrollbar scroll-smooth">

                    {/* Background Gradient */}
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#EF1239] via-[#FF4D22] to-[#FFB72D] h-full w-full -z-10"></div>

                    <div className="px-5 pt-16 relative flex flex-col items-center text-center z-10 min-h-full pb-10">
                        {/* Profile Image with subtle glow */}
                        <div className="w-24 h-24 rounded-full border-[4px] border-white/20 bg-[#2E3192] mb-4 shadow-2xl overflow-hidden relative group cursor-pointer shrink-0">
                            {profile.avatar ? (
                                <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gradient-to-tr from-[#1e1b4b] to-[#4338ca]">
                                    <div className="flex items-center gap-1">
                                        <span className="text-xl drop-shadow-md">🐝</span>
                                        <span className="text-base font-bold tracking-wider text-white drop-shadow-sm lowercase">inspler</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <h3 className="font-bold text-2xl text-white leading-tight tracking-wide drop-shadow-md">{profile.name}</h3>
                        <p className="text-white/90 text-xs font-semibold mt-1.5 mb-8 tracking-wide drop-shadow-sm">{profile.bio}</p>

                        {/* Social Icons Row */}
                        <div className="flex items-center justify-center gap-5 mb-8 text-white flex-wrap px-4">
                            {visibleLinks.filter(l => ['instagram', 'linkedin', 'twitter', 'facebook', 'youtube', 'tiktok', 'phone', 'whatsapp', 'email'].includes(l.platform)).map(link => {
                                /// Helper to get Icon
                                const getIcon = () => {
                                    if (link.thumbnail) return <img src={link.thumbnail} alt={link.platform} className="w-full h-full object-cover rounded-full" />;
                                    switch (link.platform) {
                                        case 'instagram': return <Instagram size={24} strokeWidth={2} />;
                                        case 'linkedin': return <Linkedin size={24} strokeWidth={0} fill="currentColor" />;
                                        case 'phone': return <Phone size={24} strokeWidth={2} />;
                                        case 'whatsapp': return <MessageCircle size={24} strokeWidth={2} />;
                                        // Add others as needed, defaulting to a generic icon if detected but not mapped
                                        default: return <Smartphone size={24} strokeWidth={2} />;
                                    }
                                };

                                return (
                                    <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform opacity-90 hover:opacity-100 w-6 h-6 flex items-center justify-center">
                                        {getIcon()}
                                    </a>
                                );
                            })}
                        </div>

                        {/* Link Cards */}
                        <div className="w-full space-y-3">
                            {visibleLinks.map((link, index) => (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-[#1A1A1A] text-white py-3.5 px-4 rounded-[1.2rem] flex items-center justify-between shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-sm group"
                                >
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5 overflow-hidden">
                                            {link.thumbnail ? (
                                                <img src={link.thumbnail} alt="Icon" className="w-full h-full object-cover" />
                                            ) : (
                                                <>
                                                    {index === 0 ? (
                                                        <Instagram size={18} />
                                                    ) : (
                                                        <span className="text-base">🐝</span>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                        <span className="font-medium truncate text-left">{link.label || 'Link Label'}</span>
                                    </div>

                                    <div className="text-white/40 group-hover:text-white/80 transition-colors">
                                        <MoreVertical size={18} />
                                    </div>
                                </a>
                            ))}

                            {visibleLinks.length === 0 && (
                                <div className="text-center text-white/50 text-xs py-10 border-2 border-dashed border-white/20 rounded-2xl">
                                    No links visible
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <button className="mt-8 w-full bg-[#6366F1] text-white py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-600 transition-colors">
                Share Url
            </button>
        </div>
    );
}


