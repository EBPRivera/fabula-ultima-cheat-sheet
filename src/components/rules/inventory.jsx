import Markdown from "../markdown"
import inventoryPointsContent from "../../lib/rules/inventory-points.md?raw"

export default function Inventory() {
  return (
    <div className="w-full">
      <table>
        <thead>
          <tr className="bg-primary text-primary-text">
            <th>ITEM</th>
            <th>IP COST</th>
            <th>EFFECT</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th colSpan="3">Potions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Elixir</strong></td>
            <td>3</td>
            <td>One creature recovers 50 Mind Points</td>
          </tr>
          <tr>
            <td><strong>Remedy</strong></td>
            <td>3</td>
            <td>One creature recovers 50 Hit Points</td>
          </tr>
          <tr>
            <td><strong>Tonic</strong></td>
            <td>2</td>
            <td>One creature recovers froma a single status effect</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th colSpan="3">Utility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Elemental Shard</strong></td>
            <td>2</td>
            <td>One creature suffers 10 damage of a type of your choice (<strong>air, bolt, earth, fire</strong>, or <strong>ice</strong>)</td>
          </tr>
          <tr>
            <td><strong>Magic Tent</strong></td>
            <td>4</td>
            <td>Allows the entire group to <strong>rest</strong> in the wilderness</td>
          </tr>
        </tbody>
      </table>
      <Markdown>{inventoryPointsContent}</Markdown>
    </div>
  )
}