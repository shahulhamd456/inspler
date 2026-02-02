import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export function Switch({ checked, onChange }) {
    return (
        <button
            onClick={() => onChange(!checked)}
            className={clsx(
                "w-12 h-7 flex items-center rounded-full p-1 transition-colors duration-300",
                checked ? "bg-green-500" : "bg-gray-300"
            )}
        >
            <motion.div
                layout
                className="bg-white w-5 h-5 rounded-full shadow-md"
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                style={{
                    marginLeft: checked ? 'auto' : '0'
                }}
            />
        </button>
    );
}
