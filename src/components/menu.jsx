import clsx from "clsx";
import MenuButton from "./menu-button"

export default function Menu({ className, menuItems, onMenuItemSelect, selected }) {
  return (
    <div className={clsx(
      "flex flex-col max-w-sm gap-[8px] relative left-[37px]",
      className
    )}>
      {menuItems.map((item) => {
        return (
          <MenuButton
            key={item.name}
            onClick={() => {onMenuItemSelect(item)}}
            selected={selected.name == item.name}
          >
            {item.name}
          </MenuButton>
        )
      })}
    </div>
  )
}