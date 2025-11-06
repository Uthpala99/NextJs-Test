import React from 'react'
import PageProps from 'next';

function page({ params }: { params: { id: string } }) {
  return (
    <div>Item Page {params.id}</div>
  )
}

export default page