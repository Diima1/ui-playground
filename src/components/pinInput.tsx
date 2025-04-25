import { PinInput as PinInputArk } from '@ark-ui/solid/pin-input'
import { Index, onMount } from 'solid-js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const PinInput = () => {

  let wrapperRef: HTMLDivElement | undefined
  onMount(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        scrub: 1,
        start: "top top",
        end: "bottom bottom",
        pin: false
        // id: "hero-pin",
      },
    })
      .fromTo(
        wrapperRef, 
        {x:-50},
        {
          x: 50,     // end: shift 10px to the right
          duration: 0.1,  // how fast each shake is
          yoyo: true,     // go back and forth
          repeat: 5,      // shake 5 times
          ease: 'power1.inOut', // easing function for smoothness
        }
      )
      .to(
        wrapperRef,
        { x: 0, duration: 0.5, ease: 'power1.inOut' },
      )
      .to(
        wrapperRef,
        { scale: 1.4, duration: 0.5, ease: 'power1.inOut'},
        "<"
      )
  })
  

  const handleComplete = () => {
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#hero-section",
    //     scrub: 1,
    //     start: "top top",
    //     end: "bottom bottom",
    //     // pin: true,
    //     // markers: true,
    //     id: "hero-pin",
    //   },
    // })
    //   .fromTo(
    //     wrapperRef, 
    //     {x:-50},
    //     {
    //       x: 50,     // end: shift 10px to the right
    //       duration: 0.1,  // how fast each shake is
    //       yoyo: true,     // go back and forth
    //       repeat: 5,      // shake 5 times
    //       ease: 'power1.inOut', // easing function for smoothness
    //     }
    //   )
    //   .to(
    //     wrapperRef,
    //     { x: 0, duration: 0.5, ease: 'power1.inOut' },
    //   )
    //   .to(
    //     wrapperRef,
    //     { scale: 1.4, duration: 0.5, ease: 'power1.inOut'},
    //     "<"
    //   )
  }
  return (
    <PinInputArk.Root
      placeholder=""
      class="pin-input"
      onValueComplete={handleComplete}
    >
      <PinInputArk.Label class="pin-label">Enter your code</PinInputArk.Label>

      <PinInputArk.Control ref={(elRef) => (wrapperRef = elRef)} class="pin-box-wrapper">
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