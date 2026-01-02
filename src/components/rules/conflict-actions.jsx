import Markdown from "../markdown"
import conflictActions from "../../lib/rules/conflict-actions.md?raw"

export default function ConflictActions() {
  return (
    <div className="w-full">
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Attack</strong></td>
              <td>You perform a melee or ranged attack.</td>
            </tr>
            <tr>
              <td><strong>Equipment</strong></td>
              <td>You switch any number of equipped items with any number of items in your backpack. \n- This action doesn't apply to <strong>armor</strong></td>
            </tr>
            <tr>
              <td><strong>Guard</strong></td>
              <td>Only <strong>once per turn</strong>. Until the start of your next turn:
                <ul className="text-inherit! bg-none!">
                  <li>You gain Resistance to all damage types.</li>
                  <li>You gain a +2 bonus to Opposed Checks.</li>
                  <li>You may <strong>cover</strong> another creature and prevent foes from performing melee attacks against them.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Hinder</strong></td>
              <td>You perform a Check (DL 10) against an opponent. If you succeed, you inflict <strong>dazed, shaken, slow</strong> or <strong>weak</strong> upon them.</td>
            </tr>
            <tr>
              <td><strong>Inventory</strong></td>
              <td>You spend Inventory Points to produce and immediately use a consumable item.</td>
            </tr>
            <tr>
              <td><strong>Objective</strong></td>
              <td><span>You work towards accomplishing an objective within the conflict.</span>
                <ul className="text-inherit! bg-none!">
                  <li>This will require an Attribute Check or Opposed Check.</li>
                  <li>Complex goals will often require a Clock.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Spell</strong></td>
              <td>You cast one of the <strong>spells</strong> you have learned.</td>
            </tr>
            <tr>
              <td><strong>Study</strong></td>
              <td>You attempt to gain information about someone or something.&nbsp;- This will generally require an <strong>[INS + INS]</strong> Open Check.</td>
            </tr>
            <tr>
              <td><strong>Skill</strong></td>
              <td>Some Skills require you o spend an action.</td>
            </tr>
            <tr>
              <td><strong>Other</strong></td>
              <td>You perform an action that is not covered by any of the above, negotiating its resolution and effects with the Game Master.</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}