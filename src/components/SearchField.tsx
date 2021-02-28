import React, { useRef } from 'react'

interface SearchFieldProps {
  onAdd(title: string): void
}

export const SearchField: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null)
  const [search, setSearch]: [string, (search: string) => void] = React.useState("");


  return (
    <div className="input-field mt2 searchField">
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
    </div>
  )
}