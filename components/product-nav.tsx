"use client"

import React from 'react'
import { DropdownMenu, DropdownMenuLabel, DropdownMenuContent,DropdownMenuSeparator,DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Icons } from './icons'
import Link from 'next/link'
import { productCategory } from '@/config/categories'



export default function ProductNav() {
  return (
    <div className='flex w-full items-center justify-center bg-primary py-5 text-white'>
      {productCategory.map((category, index) => (
        <DropdownMenu key={index}>
          <DropdownMenuTrigger className='flex gap-2 rounded-lg px-5 py-2 text-lg font-bold hover:bg-secondary hover:text-primary'>
            {category.menu}
            <Icons.down className="size-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {category.items.map((item, itemIndex) => (
              <Link key={itemIndex} href={item.link} passHref>
                <DropdownMenuItem className='cursor-pointer text-lg'>{item.label}</DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  )
}