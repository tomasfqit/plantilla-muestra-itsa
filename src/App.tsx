import { useState } from 'react'
import './App.css'
import MainLayout from './views/MainLayout';

interface ParamsType {
  claimCode: string;
  agencyId: number;
  moduleId: number;
}

function App() {
  const [searchParams] = useState(new URLSearchParams(window.location.search));
  const [params] = useState(() => {
    const urlParams: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      urlParams[key] = value;
    });
    return urlParams;
  });



  const paramsTyped: ParamsType = params as unknown as ParamsType;
  console.log('paramsTyped =>',paramsTyped);

  return (
   <MainLayout />
  )
}

export default App
