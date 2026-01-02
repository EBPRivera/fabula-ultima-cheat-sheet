import Markdown from "../markdown"
import fabulaPointsContent from '../../lib/rules/fabula-points-content.md?raw'

export default function FabulaPoints() {
  return (
    <div className="w-full">
      <Markdown>{fabulaPointsContent}</Markdown>
    </div>
  )
}