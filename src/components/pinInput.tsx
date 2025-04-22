import { PinInput as PinInputArk } from '@ark-ui/solid/pin-input'
import { Index } from 'solid-js'
import gsap from 'gsap'

export const PinInput = () => {
  let wrapperRef: HTMLDivElement | undefined

  const handleComplete = () => {
    if (wrapperRef) {
      gsap.fromTo(
        wrapperRef,
        { x: -10 }, // start: shift 10px to the left
        {
          x: 10,     // end: shift 10px to the right
          duration: 0.1,  // how fast each shake is
          yoyo: true,     // go back and forth
          repeat: 5,      // shake 5 times
          ease: 'power1.inOut', // easing function for smoothness
        }
      )
    }
  }
  return (
    <PinInputArk.Root
      placeholder=""
      class="pin-input"
      onValueComplete={handleComplete}
    >
      <PinInputArk.Label class="pin-label">Enter your code</PinInputArk.Label>

      <PinInputArk.Control ref={(el) => (wrapperRef = el)} class="pin-box-wrapper">
        <Index each={[0, 1, 2, 3]}>
          {(id) => (
            <PinInputArk.Input class="pin-box" index={id()} />
          )}
        </Index>
      </PinInputArk.Control>

      <PinInputArk.HiddenInput />
    </PinInputArk.Root>
  )
}


//   <PinInputArk.Root class="pin-input" placeholder="" type='alphanumeric' onValueComplete={(e) => alert(e.valueAsString)}>
//     <PinInputArk.Label class="pin-label">Enter your code</PinInputArk.Label>
//     <PinInputArk.Control class='pin-box-wrapper'>
//       <Index each={[0, 1, 2, 3]}>
//         {(id) => (
//           <PinInputArk.Input class="pin-box" index={id()}/>
//         )}
//       </Index>
//     </PinInputArk.Control>
//     <PinInputArk.HiddenInput />
//   </PinInputArk.Root>
// }