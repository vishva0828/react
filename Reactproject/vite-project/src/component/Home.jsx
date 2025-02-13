import Carddesing from "./Carddesign/card"
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/profile";
import Usercard from "./Usercard/user";
import Userdata from "./Userdata/user";

export default function Home() {

  const userDetails = {
    name: "vishva",
    mobile: "8825730441",
    address: "villianur",
  };

  return (
    <>
      {/* <Usercard></Usercard>
    <Userdata></Userdata> */}

      {/* <Navbar Details = {userDetails} />
    <h2>welcome {userDetails.name}</h2>
    <p>React project</p> */}

      <Profile></Profile>
    </>
  )

}