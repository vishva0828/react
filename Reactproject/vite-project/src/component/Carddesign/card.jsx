import { useNavigate } from "react-router-dom"
import "./card.css"
export default function card(){
const navigate = useNavigate()
const moveaddcart = ()=>{
  navigate("/addcart()")
}

  return(
    <>
    <div class="card">
        <h2 class="card-title">Navigation</h2>
        <p class="card-description">This is a simple card design. You can add more content and style it as needed.</p>
        <button class="card-btn" onClick={moveaddcart}>Click Me</button>
    </div>

    </>
  )
}