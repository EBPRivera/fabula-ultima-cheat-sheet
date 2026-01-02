import clsx from "clsx"

export default function Card({ children, className }) {
  const tailwindClasses = "flex flex-col items-start text-left"

  return <div className={clsx(tailwindClasses, className)}>
    {children}
  </div>
}