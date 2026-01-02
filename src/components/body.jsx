import { useState } from "react"
import StatusEffects from "./rules/status-effects"
import FabulaPoints from "./rules/fabula-points"
import Opportunities from "./rules/opportunities"
import ConflictActions from "./rules/conflict-actions"
import Inventory from "./rules/inventory"
import Menu from "./menu"

const CHEAT_SHEET_ITEMS = [
  { name: 'Actions', content: <ConflictActions /> },
  { name: 'Fabula Points', content: <FabulaPoints /> },
  { name: 'Items', content: <Inventory /> },
  { name: 'Opportunities', content: <Opportunities /> },
  { name: 'Status Effects', content: <StatusEffects /> },
]

export default function Body() {
  const [selected, setSelected] = useState(CHEAT_SHEET_ITEMS[0])

  return (
    <div className="flex flex-row flex-[1 1] overflow-auto w-screen">
      <Menu
        className="mt-[16px] ms-[8px] z-0"
        menuItems={CHEAT_SHEET_ITEMS}
        onMenuItemSelect={(item) => {setSelected(item)}}
        selected={selected}
      />
      <div className="z-1 bg-pure-white overflow-auto flex-[1 1] w-full border-s-1 border-b-1">
        {selected.content}
      </div>
    </div>
  )
}