import clsx from "clsx"

export default function MenuButton({ children, selected = false, onClick = () => {} }) {
  const translateCss = "-translate-x-[32px]"

  return (
    <button
      className={clsx(
        "w-[200px] h-[48px]",
        selected && translateCss
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
