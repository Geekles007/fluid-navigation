'use client';

import { links } from '@/lib/constants';
import React from 'react';
import MenuItem from '../atoms/menu-item';
import { motion } from 'framer-motion';
import Dropdown from '../molecules/dropdown';
import useOutsideClick from '@/hooks/use-outside-click';

const Menus = () => {
  const [selected, setSelected] = React.useState<string | null>('dashboard');
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    setOpen(false);
  });

  return (
    <motion.div ref={ref} layout className='flex items-center gap-2'>
      {links?.map((link) => {
        return link?.children?.length > 0 ? (
          <Dropdown
            menu={link}
            open={open}
            key={`dropdown-${link.key}`}
            selected={selected === link.key}
            onClick={() => {
              setSelected(link.key);
              if (!open) {
                setOpen(true);
              }
            }}
          />
        ) : (
          <MenuItem
            onClick={() => setSelected(link.key)}
            id={link?.key}
            key={link.key}
            selected={selected === link.key}
          >
            {link.label}
          </MenuItem>
        );
      })}
    </motion.div>
  );
};

export default Menus;
