import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('green')
  const [mode, setMode] = useState('light')
  const [input, setinput] = useState('')
  const [result, setresult] = useState('')
  const [history, setHistory] = useState([])
  useEffect(() => { setHistory([`${input}=${result}`, ...history]); setinput('') }, [result])
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked
    if (darkModeStatus) {
      setMode('dark')
    } else {
      setMode('light')
    }

  }
  return (
    <>
      <div className={` bg-primaryBg h-screen theme-${color} theme-${mode}`}>
        <div className=' border-b-2 border-onNeutralBg p-3 flex justify-center gap-5'>
          <button className='bg-green-400 p-2 rounded-sm' onClick={() => { setColor('green') }} >Green</button>
          <button className='bg-red-400 p-2 rounded-sm' onClick={() => { setColor('red') }}>Red</button>
          <button className='bg-blue-400 p-2 rounded-sm' onClick={() => { setColor('blue') }}>Blue</button>
          <div className='my-2 flex gap-2'>
            <input
              type="checkbox"
              name="dark"
              id="Darkswitch"
              checked={mode === "dark"}
              onChange={onChangeBtn}
            />
            <label for="Darkswitch">Dark Mode</label>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className='grid w-2/3 sm:grid-cols-4  gap-x-3 m-4  p-3 border-2 border-onPrimaryBg'>
            <div className='history sm:col-span-1 hidden sm:block min-h-fit bg-onPrimaryBg text-primaryBg p-3' >
              <div className=' border-b-2 border-neutralBg pb-5'>
              History
              <button className=' bg-primaryBg p-2 text-onPrimaryBg rounded-md float-end' onClick={() => setHistory([])}>Delete</button>
              </div>
              

              <ul className=' text-neutralBg'>
                {history.map((item) => (
                  <li >{item}</li>
                ))}
              </ul>

            </div>
            <div className='main sm:col-span-3  min-h-full  '>
              <div className='display'>
                <div className="input min-h-10 max-h-10 min-w-fit p-3 text-xl bg-onPrimaryBgLight">
                  {input}
                </div>
                <div className="results min-h-11 p-4 mb-3 text-xl bg-onPrimaryBg text-neutralBg ">
                  ={result}
                </div>
              </div>
              <div className=" grid gap-5 ">
                <div className='grid gap-4 grid-cols-4'>
                  <button className=' text-xl h-[80px]  nge-700 bg-orange-300 hover:bg-orange-600 rounded-full col-span-1' onClick={() => setinput("")}>AC</button>
                  <button className=' text-xl h-[80px] bg-orange-300 hover:bg-orange-600  rounded-full col-span-1' onClick={() => setinput(prev => prev + "%")}>%</button>
                  <button className=' text-xl h-[80px] bg-orange-300 hover:bg-orange-600  rounded-full col-span-1' onClick={() => setinput(prev => prev.slice(0, -1))}>←</button>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary 0 rounded-full col-span-1' onClick={() => setinput(prev => prev + "/")}>÷</button>
                </div>
                <div className='grid gap-4 grid-cols-4'>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "7")}>7</button>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "8")}>8</button>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "9")}>9</button>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "*")}>*</button>
                </div>
                <div className='grid gap-4 grid-cols-4'>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "4")}>4</button>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "5")}>5</button>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "6")}>6</button>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "-")}>-</button>
                </div>
                <div className='grid gap-4 grid-cols-4'>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "1")}>1</button>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "2")}>2</button>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "3")}>3</button>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "+")}>+</button>
                </div>
                <div className='grid gap-4 grid-cols-4'>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + "0")}>0</button>
                  <button className=' text-xl h-[80px] hover:bg-onPrimaryBg hover:border-2 hover:border-neutralBg  bg-primary rounded-full col-span-1' onClick={() => setinput(prev => prev + ".")}>.</button>
                  <button className=' text-xl h-[80px] bg-orange-300 hover:bg-orange-600 rounded-full col-span-2' onClick={() => setresult([eval(input)])}>=</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
