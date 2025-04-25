import { icons } from "./icons";
import gsap from 'gsap'

function Button() {
    let buttonRef: HTMLButtonElement | undefined
    const animateClick = () => {
        if (buttonRef) {
        //   gsap.fromTo(
        //     buttonRef,
        //     { scale: 1 },
        //     { scale: 1.1, duration: 1, yoyo: true, repeat: 1, ease: 'power1.inOut'}
        //   )
           gsap.to(
            buttonRef,
            { scale: 1.1, duration: 1, yoyo: true, ease: 'power1.inOut', rotation: 360 }
          )
        }
      }    
    return (
        <button class="button" ref={el => buttonRef = el} onClick={animateClick}>
            <div class="middle-layer">
                <div class="inner-layer">
                    <span> Get Started</span>    
                    <span class="arrow">
                        <icons.ArrowRight size={20} color="white" />
                    </span>
                    </div>
            </div>
        </button>
    )
}
  
  export default Button;