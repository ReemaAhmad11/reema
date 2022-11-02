import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Git() {
  const [state, setState] = useState([]);

  let url = "https://6362424d66f75177ea2a99c0.mockapi.io/toDo"

  useEffect (() => {
    axios.get(url).then((res) => {
      setState(res.data)


    })
  })


  return (
    <div>



      {state.map(items => {
        return (
          <div >
            {items.fname}
            {items.lname}
            {items.passowrd}
            {items.fname}


          </div>
        )
      }
      )
      }
    </div>



  )
}

export default Git