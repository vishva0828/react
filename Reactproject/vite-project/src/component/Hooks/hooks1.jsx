import { useState } from "react";
import "./hooks1.css";
export default function Hooks() {
  const [cardview, cardupdate] = useState(false)
  return (
    <>
      {cardview === true && (
        <div class="card">
          <div class="card-content">
            <h2 class="card-title">Use State</h2>
            <p class="card-description">This is a simple description of the card content. You can put more details here.</p>
            <a href="#" class="card-btn">Read More</a>
          </div>
        </div>
      )}


      <button type="button" onClick={() => cardupdate(true)}>UPDATE</button>
    </>
  )
}