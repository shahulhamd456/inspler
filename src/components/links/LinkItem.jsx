import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Pencil, Link as LinkIcon, Trash2, Image } from 'lucide-react';
import { Switch } from '../common/Switch';
import { useLinks } from '../../context/LinkContext';

export function LinkItem({ link }) {
    const { updateLink, removeLink } = useLinks();

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: link.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        zIndex: isDragging ? 1000 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="bg-white rounded-3xl p-4 md:p-5 mb-4 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] group hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all"
        >
            <div className="flex items-center gap-2 md:gap-4">
                {/* Drag Handle */}
                <button
                    {...attributes}
                    {...listeners}
                    className="self-center text-gray-300 hover:text-gray-500 cursor-grab active:cursor-grabbing touch-none p-2 -ml-2 shrink-0"
                >
                    <div className="grid grid-cols-2 gap-[2px] w-[14px]">
                        <div className="w-[3px] h-[3px] rounded-full bg-current"></div>
                        <div className="w-[3px] h-[3px] rounded-full bg-current"></div>
                        <div className="w-[3px] h-[3px] rounded-full bg-current"></div>
                        <div className="w-[3px] h-[3px] rounded-full bg-current"></div>
                        <div className="w-[3px] h-[3px] rounded-full bg-current"></div>
                        <div className="w-[3px] h-[3px] rounded-full bg-current"></div>
                    </div>
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0 space-y-4 py-1">
                    {/* Label Input */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 flex items-center gap-2 md:gap-3 bg-white border border-gray-200 rounded-full px-3 md:px-4 py-2.5 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all shadow-sm">
                            <Pencil size={14} className="text-gray-400 shrink-0" />
                            <input
                                type="text"
                                value={link.label}
                                placeholder="add your link label"
                                onChange={(e) => updateLink(link.id, { label: e.target.value })}
                                className="flex-1 w-full text-sm font-semibold text-gray-700 placeholder:text-gray-300 outline-none bg-transparent min-w-0"
                            />
                            <div className="text-gray-300 cursor-pointer hover:text-gray-500 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* URL Input */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 flex items-center gap-2 md:gap-3 bg-white border border-gray-200 rounded-full px-3 md:px-4 py-2.5 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all shadow-sm">
                            <LinkIcon size={14} className="text-gray-400 shrink-0" />
                            <input
                                type="text"
                                value={link.url}
                                placeholder="add a link to any web page"
                                onChange={(e) => updateLink(link.id, { url: e.target.value })}
                                onBlur={(e) => {
                                    let val = e.target.value.trim();
                                    let updates = {};
                                    if (val && !/^https?:\/\//i.test(val) && !/^tel:/i.test(val) && !/^mailto:/i.test(val)) {
                                        val = `https://${val}`;
                                        updates.url = val;
                                    } else {
                                        updates.url = val;
                                    }

                                    // Platform Detection
                                    const lowerVal = val.toLowerCase();
                                    let platform = 'website';
                                    if ((lowerVal.includes('instagram.com') || lowerVal.includes('instagr.am'))) platform = 'instagram';
                                    else if (lowerVal.includes('linkedin.com')) platform = 'linkedin';
                                    else if (lowerVal.includes('twitter.com') || lowerVal.includes('x.com')) platform = 'twitter';
                                    else if (lowerVal.includes('facebook.com')) platform = 'facebook';
                                    else if (lowerVal.includes('youtube.com') || lowerVal.includes('youtu.be')) platform = 'youtube';
                                    else if (lowerVal.includes('tiktok.com')) platform = 'tiktok';
                                    else if (lowerVal.startsWith('tel:')) platform = 'phone';
                                    else if (lowerVal.includes('wa.me') || lowerVal.includes('whatsapp.com')) platform = 'whatsapp';
                                    else if (lowerVal.startsWith('mailto:')) platform = 'email';

                                    updates.platform = platform;
                                    updateLink(link.id, updates);
                                }}
                                className="flex-1 w-full text-sm font-medium text-gray-600 placeholder:text-gray-300 outline-none bg-transparent min-w-0"
                            />
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="pt-2 flex items-center justify-between">
                        <Switch
                            checked={link.visible}
                            onChange={(val) => updateLink(link.id, { visible: val })}
                        />
                    </div>
                </div>

                {/* Right Section: Thumbnail + Trash */}
                <div className="flex flex-col items-center md:items-end gap-3 self-stretch pl-2 md:pl-4 border-l border-transparent min-h-[120px] shrink-0">
                    <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-[1.2rem] bg-white border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-300 transition-colors cursor-pointer relative group/thumb shadow-sm overflow-hidden">
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        updateLink(link.id, { thumbnail: reader.result });
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />

                        {/* Display Thumbnail or Placeholder */}
                        {link.thumbnail ? (
                            <img src={link.thumbnail} alt="Thumbnail" className="w-full h-full object-cover" />
                        ) : (
                            <>
                                {link.id === '1' ? (
                                    <div className="text-red-500"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2c1.74 0 3-.75 3-2" /></svg>🐝</div>
                                ) : (
                                    <Image size={24} strokeWidth={2} />
                                )}
                            </>
                        )}
                    </div>

                    <div className="flex-1"></div>

                    <button
                        onClick={() => removeLink(link.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors p-1.5 hover:bg-red-50 rounded-lg"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
