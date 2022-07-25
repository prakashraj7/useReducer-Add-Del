import * as React from 'react';
import './style.css';

const initialState = [
  { id: Date.now(), name: 'prakash', email: 'prak@gmail.com' },
];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter((x) => {
        return x.id !== action.payload.id;
      });
  }
}

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const addContact = (e) => {
    e.preventDefault();
    const axe = {
      id: Date.now(),
      name,
      email,
    };
    setName('');
    setEmail('');
    dispatch({ type: 'ADD', payload: axe });
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add</button>
      </form>
      <div>
        <ul>
          {state.map((x) => {
            return (
              <div>
                {' '}
                <li key={x.id}>{x.name}</li>
                <li>{x.email}</li>
                <button
                  onClick={() =>
                    dispatch({ type: 'DELETE', payload: { id: x.id } })
                  }
                >
                  Del
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
