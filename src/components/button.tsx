import { icons } from "./icons";

function Button() {
    return (
        <button class="button">
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