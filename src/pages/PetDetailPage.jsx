import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import Header from '../components/Layout/Header';

export default function PetDetailPage() {

  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const { token } = useContext(UserContext);
  
  useEffect(() => {
    async function getPet() {
      try {
        const api = `${process.env.REACT_APP_SERVER}/api/pet/${id}/`;
        console.log("The token is", token);
        const response = await fetch(api, {
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` },
          });
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setPet(data);
      }
      catch (error) {
        console.error("Something went wrong");
      }
    }
    getPet();
  }
  , [token, id]);

  if (!pet) {
    return (
      <div>Loading...</div>
    )
  }


  return (
    <div>
      <Header title={pet.name? pet.name : "Shelter"} />
      <img className="h-auto mx-auto max-w-md max-w-lg rounded-lg my-10"
        src={pet.image? pet.image : "/logo512.png"} alt="logo" 
      />
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Pet Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Breed </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{pet.breed? pet.breed : "N/A"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Color</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{pet.color? pet.color : "N/A"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Size</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{pet.size? pet.size : "N/A"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Age</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{pet.age? pet.age : "N/A"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Gender</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{pet.gender? pet.gender : "N/A"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {pet.description? pet.description : "N/A"}
            </dd>
          </div>
          <div class="px-4 flex items-center justify-between">
            <Link 
              to={`/shelter/${pet.shelter}`}
              class="text-white text-center my-5 w-32 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                View shelter
            </Link>
            <Link
              to={`/adoption`}
              class="text-white text-center my-5 w-64 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Submit an adoption application
            </Link>
          </div>
        </dl>
      </div>
    </div>
  )
}