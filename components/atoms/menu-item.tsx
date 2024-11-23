import { cn } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { PropsWithChildren, memo } from 'react';

type MenuItemProps = PropsWithChildren & {
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  id?: string;
};

const MenuItem = ({
  children,
  selected,
  className,
  onClick,
  id,
}: MenuItemProps) => {
  return (
    <motion.button
      //   whileTap={{ scale: 0.95 }}
      layout
      className={cn(`relative px-4 py-2`, className)}
      style={{ borderRadius: '8px' }}
      onClick={onClick}
    >
      <motion.span
        layout
        transition={{ duration: 0.2, delay: 0.1 }}
        className={cn(
          'pointer-events-none',
          selected ? 'text-white' : 'text-gray-500'
        )}
      >
        {children}
      </motion.span>
      {selected && (
        <motion.div
          layout
          layoutId='cursor'
          style={{ borderRadius: '8px' }}
          className='pointer-events-none absolute inset-0 z-[10] h-full w-full bg-black mix-blend-difference'
        />
      )}
      {/* <div
        className='absolute inset-0 h-full w-full bg-slate-100'
        style={{
          borderRadius: '8px',
        }}
      /> */}
    </motion.button>
  );
};

export default memo(MenuItem);
