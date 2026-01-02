import statusEffectsContent from "../../lib/rules/status-effects.md?raw"
import Markdown from "../markdown"

export default function StatusEffects() {
  return (
    <div className="w-full">
      <Markdown>
        {statusEffectsContent}    
      </Markdown>
    </div>
  )
}