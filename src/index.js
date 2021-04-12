import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// import HookApp from './HookApp';
// import { CounterApp } from './components/useState/CounterApp';
// import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
// import { FocusScreen } from './components/useRef/FocusScreen';
// import { LayoutEffect } from './components/useLayoutEffect/LayoutEffect';
// import { Memorize } from './components/memos/Memorize';
// import { MemorizeHook } from './components/memos/MemorizeHook';
// import { CallbackHook } from './components/memos/CallbackHook';
import { Padre } from './components/tarea-memo/Padre';

ReactDOM.render(
  <React.StrictMode>
    <Padre />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
