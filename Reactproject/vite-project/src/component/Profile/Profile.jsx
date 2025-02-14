export default function Profile() {
  return (
    <>
      <div class=" flex items-center justify-center min-h-screen">
        <div class=" relative w-100 h-135 border border-none bg-blue-100  rounded-b-md rounded-t-md" >
          <img class=" rounded-t-md " src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" />
          <h3 class="font-sans text-2xl absolute top-[300px] left-[16px] " >Website Review Check</h3>
          <div class="font-sans font-normal text-lg text-black absolute top-[350px] left-[16px]">The place is close to Barceloneta Beach and bus stop just 2 min by walk
          and near. </div>
          <button class="border rounded-md bg-blue-200 w-40 border-sky-200 absolute top-[430px] left-[16px]">Learn More</button>
        </div>
      </div>
    </>
  )
}