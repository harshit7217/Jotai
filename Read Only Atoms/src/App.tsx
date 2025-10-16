import { atom, useAtom } from "jotai";

// demo of read only atoms
const textAtom = atom('readonly');
const uppercase = atom((get) => get(textAtom).toUpperCase());

// another example
const firstName = atom('Harshit');
const lastName = atom('Chaudhary');
const fullName = atom((get) => get(firstName)+ " " + get(lastName));

// Using Filter and Sort

const friendsStatus = atom([
  { name: 'Alice', online: true },
  { name: 'Bob', online: false },
  { name: 'Charlie', online: true },
])
const onlineFriends = atom((get) => get(friendsStatus).filter((item) => item.online));
const offlineFriends = atom((get) => get(friendsStatus).filter((item) => !item.online))

function App() {
  // demo of read only atoms
  const [lowercaseText, setLowercaseText] = useAtom(textAtom);
  const [uppercaseText] = useAtom(uppercase);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLowercaseText(e.target.value);
  };

  // Name example
  const [firstNameValue, setFirstName] = useAtom(firstName);
  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }

  const [lastNameValue, setLastName] = useAtom(lastName);
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  const [fullNameValue] = useAtom(fullName);

  // Using Filter and Sort
  const [onlineFriendsValue] = useAtom(onlineFriends);
  const [offlineFriendsValue] = useAtom(offlineFriends)

  


  return (
    <div className="flex justify-center items-center h-[100vh] flex-col gap-4">
      <h1>Demo</h1>
      <input className="border" type="text" value={lowercaseText} onChange={handleChange} />
      <h1>{uppercaseText}</h1>
      

      {/* Name Example */}
      <h1>Name Example</h1>
      <input  className="border" type="text" value={firstNameValue} onChange={handleFirstName} />
      <input  className="border" type="text" value={lastNameValue} onChange={handleLastName} />
      <h1>{fullNameValue}</h1>

      {/* Using filter and sort */}
      <h1>Friends Details and Status</h1>
      <h2>Online Friends</h2>
      <ul>
        
        {onlineFriendsValue.map((friend) => (
          <li>{friend.name}</li>
        ))}
      </ul>
      <h2>Offline Friends</h2>
      <ul>
        {offlineFriendsValue.map((friend) => (
          <li>{friend.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
