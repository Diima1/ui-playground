import { PinInput } from '@ark-ui/solid/pin-input'
import { Index } from 'solid-js'

export const pinInput = () => (
  <PinInput.Root class="pin-input" placeholder="" type='alphanumeric' onValueComplete={(e) => alert(e.valueAsString)}>
    <PinInput.Label class="pin-label">Enter your code</PinInput.Label>
    <PinInput.Control class='pin-box-wrapper'>
      <Index each={[0, 1, 2, 3]}>
        {(id) => (
          <PinInput.Input class="pin-box" index={id()}/>
        )}
      </Index>
    </PinInput.Control>
    <PinInput.HiddenInput />
  </PinInput.Root>
)

export default pinInput;