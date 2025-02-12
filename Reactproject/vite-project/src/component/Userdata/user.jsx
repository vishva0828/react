import './user.css'
export default function Userdata(){

  const users = [
    {
      name: "John Doe",
      mobile: "123-456-7890",
      email: "johndoe@example.com",
      address: "1234 Elm Street, Springfield, IL"
    },
    {
      name: "Jane Smith",
      mobile: "987-654-3210",
      email: "janesmith@example.com",
      address: "5678 Oak Avenue, Chicago, IL"
    },
    {
      name: "Emily Johnson",
      mobile: "555-123-4567",
      email: "emilyj@example.com",
      address: "4321 Pine Road, Aurora, IL"
    },
    {
      name: "Michael Brown",
      mobile: "666-777-8888",
      email: "michaelb@example.com",
      address: "8765 Maple Lane, Naperville, IL"
    },
    {
      name: "Sarah Lee",
      mobile: "321-654-9870",
      email: "sarahlee@example.com",
      address: "1357 Birch Blvd, Schaumburg, IL"
    },
    {
      name: "David Clark",
      mobile: "444-555-6666",
      
      email: "davidc@example.com",
      address: "2468 Cedar Street, Evanston, IL"
    },
    {
      name: "Laura Wilson",
      mobile: "789-123-4560",
      email: "lauraw@example.com",
      address: "9876 Redwood Road, Oak Park, IL"
    },
    {
      name: "Chris Evans",
      mobile: "111-222-3333",
      email: "chrisevans@example.com",
      address: "5550 Willow Way, Arlington Heights, IL"
    },
    {
      name: "Olivia Martinez",
      mobile: "222-333-4444",
      email: "oliviam@example.com",
      address: "3345 Ash Court, Wheaton, IL"
    },
    {
      name: "Daniel White",
      mobile: "555-777-9999",
      email: "danielw@example.com",
      address: "6789 Maplewood Drive, Glenview, IL"
    }
  ]
  
  return (
    <>
 <div>
      <h2>User Information Table</h2>
      <table>
        <thead>
          <tr>
            <th>RegNo</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((items, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{items.name}</td>
              <td>{items.mobile}</td>
              <td>{items.email}</td>
              <td>{items.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</>
  )
}