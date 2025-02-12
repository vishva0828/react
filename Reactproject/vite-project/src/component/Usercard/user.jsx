import './user.css'
export default function Usercard() {
  const userData = [
    {
      name: "vishva",
      mobile: "882673",
      email: "vishva08",
      address: "pondy"
    },

    {
      name: "vijay",
      mobile: "882673002",
      email: "vijay08",
      address: "villianur"
    },

    {
      name: "ajith",
      mobile: "882673987",
      email: "ajith08",
      address: "lawspet"
    },
    {
      name: "surya",
      mobile: "88200673",
      email: "surya08",
      address: "kalapet"
    },
    {
      name: "surya",
      mobile: "88200673",
      email: "surya08",
      address: "kalapet"
    }
  ]

  const description = [
    {
      des: "GitHub is a web-based platform that allows developers to store, share, and collaborate on code, web pages, and other content."
    },
    {
      des: "It uses Git, an open source version control system, to track changes to code over time."
    }
  ]
  return (
    <>
      {userData.map((items, index) => (
        <section class="main-container">
          <p>RegNo: {index + 1}</p>
          <p>Name: {items.name}</p>
          <p>Mobile: {items.mobile}</p>
          <p>Email: {items.email}</p>
          <p>Address: {items.address}</p>

        </section>
      ))}

      <ul>
        {description.map((data, index) => (
          <li style={{ color: "red" }}>{data.des}</li>
        ))}
      </ul>



    </>
  )
}