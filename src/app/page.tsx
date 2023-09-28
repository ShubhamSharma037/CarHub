import { CustomFilter, Hero } from '@/components'
import Searchbar from '@/components/SearchBar'
import { fetchCars } from '@/utils'
import CarCard from '@/components/CarCard';
import { CarProps } from '@/types';


export default async function Home() {
  const allCars = await fetchCars();


  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogues
          </h1>
          <p>Explore the cars you like</p>
        </div>

        <div className="home__filters">
          <Searchbar/>

          <div className="home__filter-container">
            <CustomFilter title='fuel'/>
            <CustomFilter title='year'/>
          </div>
        </div>

        <section>
          <div className="home__cars-wrapper">
            {
              allCars.map((car : CarProps)=>(
                <CarCard car={car}/>
              ))
            }
          </div>
        </section>
      </div>
    </main>
  )
}
