import React from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useLinks } from '../../context/LinkContext';
import { LinkItem } from './LinkItem';

export function LinkList() {
    const { links, reorderLinks } = useLinks();
    const [activeId, setActiveId] = React.useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            reorderLinks(active.id, over.id);
        }
        setActiveId(null);
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={links}
                strategy={verticalListSortingStrategy}
            >
                <div className="space-y-4">
                    {links.map((link) => (
                        <LinkItem key={link.id} link={link} />
                    ))}
                </div>
            </SortableContext>

            {/* Optional: Drag Overlay for smoother animation */}
        </DndContext>
    );
}
