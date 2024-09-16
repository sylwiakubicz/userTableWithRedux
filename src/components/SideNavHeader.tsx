import React from 'react'

function SideNavHeader({ title }: { title: string }) {
  return (
    <h1 className="font-semibold text-3xl pl-3 dark:text-white pb-5">
      {title}
    </h1>
  )
}

export default SideNavHeader