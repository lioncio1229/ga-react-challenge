import { useState, useEffect } from 'react'
import './App.css'
import cute from './assets/cute.jpg';

function UserModal({user, excluded=[], onClose}){

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className='modal-container' onClick={onClose}>
      <div className='modal' onClick={handleModalClick}>
        {
          user ? 
          <>
            <img src={user.avatar} alt="" />
            <div className='info'>
              <div className='close-wrapper'>
                <button onClick={onClose}>Close</button>
              </div>
              <div className='info-grid'>
                {
                  Object.keys(user).map(key => (
                    !excluded.includes(key) &&
                    <>
                      <div className='key'>{key}</div>
                      <div className='value'>{user[key]}</div>
                    </>
                  ))
                }
              </div>

            </div>
          </> :
          <div>User prop is empty</div>
        }
      </div>
    </div>
  )
}

const header = ['', 'Name', 'Email', 'More'];
const toRender = ['avatar', 'name', 'email'];

//Endpoint doesn't work, so we provided mock data for now
const mockData = Array(50).fill().map((_, i) => ({avatar: cute, name: 'Cute dog '+(i+1), email: `test${i+1}@email.com`, age: i+1, cutieLevel: (i+1) * 5}))

function App() {
  const [data, setData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // fetch('https://example.com/api/user-profiles')
    // .then(resp => {
    //   if(resp.ok){
    //     return resp.json();
    //   }
    //   throw resp;
    // })
    // .then(data => {
    //   setData(data);
    // })
    // .catch(err => {
    //   console.error("Error fetching: ", err);
    // });

    setData(mockData);
  }, []);

  useEffect

  const handleOpenModal = (user) => {
    setCurrentUser(user);
  }

  const handleCloseModal = (e) => {
    setCurrentUser(null);
  }

  return (
    <div className='app'>
     <h1 className='title'>Users</h1>

     <div className='grid-container'>
      <div className='grid-row header'>
       {
         header.map((item, i) => (
           <div className='grid header' key={i}> {item} </div>
         ))
       }
      </div>
      {
        data && data.map((data, i) => {
          return (
            <div key={i} className='grid-row'>
            {
              Object.keys(data).map((key, j) => (
                toRender.includes(key) && <div key={j} className='grid item'> 
                    {key === 'avatar' ? <img src={mockData[i][key]} /> : mockData[i][key]} 
                </div>
              ))
            }
            <div className='grid item'>
              <button className='more' onClick={() => handleOpenModal(data)}>More Details</button>
            </div>
            </div>
          )
        })
      }
     </div>
     {
      currentUser && <UserModal user={currentUser} excluded={['avatar']} onClose={handleCloseModal}/>
     }
    </div>
  )
}

export default App
