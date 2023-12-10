import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import Header from '../components/Layout/Header';
import { Link } from 'react-router-dom';

export default function ShelterDetailPage() {

  const { id } = useParams();
  const [shelter, setShelter] = useState(null);
  const [ pets, setPets ] = useState([]);
  const { token } = useContext(UserContext);
  
  useEffect(() => {
    async function getShelter() {
      try {
        const api = `${process.env.REACT_APP_SERVER}/api/shelters/${id}`;
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
        setShelter(data);
      }
      catch (error) {
        console.error("Something went wrong");
      }
    }
    getShelter();
  }
  , [token, id]);

  useEffect(() => {
    async function getPets() {
      try {
        const api = `${process.env.REACT_APP_SERVER}/api/shelters/list`;
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
        setPets(data.results);
      }
      catch (error) {
        console.error("Something went wrong");
      }
    }
    getPets();
  }
  , [token, id]);


  if (!shelter) {
    return (
      <div>Loading...</div>
    )
  }


  return (
    <div>
      <Header title={shelter.name? shelter.name : "Shelter"} />
      <img className="h-auto mx-auto max-w-md max-w-lg rounded-lg my-10"
        src={shelter.image? shelter.image : "/logo512.png"} alt="logo" 
      />
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Pet Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Location </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{shelter.location? shelter.location : "N/A"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Phone Number</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{shelter.phone_number? shelter.phone_number : "N/A"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{shelter.contact_email? shelter.contact_email : "N/A"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Bio</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{shelter.bio? shelter.bio : "N/A"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Pet Listings</dt>
            {/* Map pets dynamically here */}
            <ul className="divide-y divide-gray-100">
                {pets.map((pet) => (
                  <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={pet.image} alt="" />
                        <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{pet.name? pet.name : "Pet"}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{pet.breed? pet.breed : "Breed"}</p>
                        </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                        <Link to={`/pet/${pet.id}`} className="text-white text-center w-32 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                          View details
                        </Link>
                    </div>
                  </li>
                ))}
            </ul>
        </div>
        </dl>
      </div>
    </div>
  )
}