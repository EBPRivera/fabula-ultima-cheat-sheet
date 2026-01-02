import Markdown from "../markdown"
import opportunitiesContent from "../../lib/rules/opportunities-content.md?raw"

export default function Opportunities() {
  return (
    <div className="w-full">
      <Markdown>{opportunitiesContent}</Markdown>
    </div>
  )
}