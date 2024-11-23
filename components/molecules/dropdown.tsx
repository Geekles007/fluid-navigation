import { IMenu } from '@/models/IMenu';
import React, { memo } from 'react';
import MenuItem from '../atoms/menu-item';
import { motion } from 'framer-motion';

interface DropdownProps {
  menu: IMenu;
  onClick?: () => void;
  selected?: boolean;
  open?: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Dropdown = ({ menu, open, onClick, selected }: DropdownProps) => {
  return (
    <motion.div layout className='relative'>
      <MenuItem
        onClick={() => {
          onClick?.();
        }}
        id={menu?.key}
        key={menu.key}
        selected={selected && !open}
      >
        {menu?.label}
      </MenuItem>
      {selected && (
        <motion.div
          className='absolute top-12 w-52 bg-black p-3 mix-blend-difference'
          style={{
            borderRadius: '12px',
          }}
          layoutId='cursor'
          layout
        >
          <motion.ul
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, staggerChildren: 0.1 }}
            className='flex flex-col gap-2 '
          >
            {menu?.children?.map((child) => {
              return (
                <motion.li key={child.key} variants={itemVariants}>
                  <motion.button
                    layout
                    className='text-gray-300 hover:text-white'
                    key={child.key}
                  >
                    {child.label}
                  </motion.button>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default memo(Dropdown);
