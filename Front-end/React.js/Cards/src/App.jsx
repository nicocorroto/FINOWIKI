import './cards/CardLoading.css'
import Card1 from './cards/Card1'
import CardLoading from './cards/CardLoading'
import { useEffect, useState } from 'react'

function App() {

  const [datos, setDatos] = useState()

  useEffect(() => {
    fetchData()

    setTimeout(() => {
      CardCompletas()
    }, 1000);
  }, [])

  function loading() {
    return <CardLoading />
  }

  function CardCompletas() {
    {
      datos.map(data => (
        <Card1 title={data.tilte} info={data.info} />
      ))
    }
  }

  // const fetchData = async () => {
  //   try {
  //     const data = await fetch('card.json')
  //     const response = await data.json()
  //     setDatos(response)
  //   } catch (err) {
  //     console.log("Malio sal la obtencion de datos")
  //   }
  // }

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const jsonData = await response.json();
      setDatos(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <>
      <div>
        <h3>Probando Cards</h3>
      </div>
      <section className='container-card'>

      </ section>
    </>
  )
}

export default App
