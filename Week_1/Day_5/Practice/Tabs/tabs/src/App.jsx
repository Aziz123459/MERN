import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Tabs from './components/Tabs'

function App() {
  const [tabIndex,setTabIndex]= useState (0);
  const tabs=[
    {tab:"tab 1",content:"tab 1 content"},
    {tab:"tab 2",content:"tab 2 content"},
    {tab:"tab 3",content:"tab 3 content"},
  ];
  const select=(index)=>{
    setTabIndex(index);
  }
  const Style = (index) => {
    if (index === tabIndex) {
      return "selected";
    } else {
      return "nonSelected";
    }
  }

  return (
    <>
    <Tabs select={select} tabs={tabs} Style={Style}/>
    <Content tabs={tabs} tabIndex={tabIndex}/>
    
    </>
  )
}

export default App
