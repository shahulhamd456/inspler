import React, { createContext, useContext, useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';

const LinkContext = createContext();

export const useLinks = () => useContext(LinkContext);

export function LinkProvider({ children }) {
    const [profile, setProfile] = useState({
        name: 'Inspler',
        bio: 'eCommerce & Digital Marketing',
        avatar: '', // Add default or placeholder
    });

    const [links, setLinks] = useState([
        { id: '1', label: 'Inspler', url: 'https://inspler.com', visible: true, platform: 'website' },
        { id: '2', label: 'Instagram', url: 'https://instagram.com/inspler', visible: true, platform: 'instagram' },
        { id: '3', label: 'LinkedIn', url: 'https://linkedin.com/company/inspler', visible: true, platform: 'linkedin' },
        { id: '4', label: 'Phone', url: 'tel:+1234567890', visible: true, platform: 'phone' },
        { id: '5', label: 'WhatsApp', url: 'https://wa.me/1234567890', visible: true, platform: 'whatsapp' },
    ]);

    const addLink = () => {
        const newLink = {
            id: crypto.randomUUID(),
            label: '',
            url: '',
            visible: true,
            platform: 'website'
        };
        setLinks((prev) => [newLink, ...prev]);
    };

    const updateLink = (id, updates) => {
        setLinks((prev) => prev.map(link => link.id === id ? { ...link, ...updates } : link));
    };

    const removeLink = (id) => {
        setLinks((prev) => prev.filter(link => link.id !== id));
    };

    const reorderLinks = (activeId, overId) => {
        setLinks((items) => {
            const oldIndex = items.findIndex((i) => i.id === activeId);
            const newIndex = items.findIndex((i) => i.id === overId);
            return arrayMove(items, oldIndex, newIndex);
        });
    };

    return (
        <LinkContext.Provider value={{
            profile, setProfile,
            links, addLink, updateLink, removeLink, reorderLinks
        }}>
            {children}
        </LinkContext.Provider>
    );
}
