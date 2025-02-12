import './Navbar.css'
export default function Navbar({ Details }){
  const userDetails = Details;
  console.log(userDetails,"Details");

  return(
    <>
    <nav class = "navi-container">
      <div class ="navi">
      <p>Shopping website {userDetails.address}</p>
      </div>
    </nav>
    </>
  )
}