
'use client'
import { decrement, increment, Reset } from '@/Redux/counter/counterSlice';
import { fetchPhotos } from '@/Redux/dala/dataSlice';
import { sepfetchPhotos } from '@/Redux/sepdata/sepdata';
import { useAddPersonMutation, useDeleteUserMutation, useUpdatePersonMutation, useViewPersonQuery } from '@/Redux/services/contactApi';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AboutUs = () => {
    const count = useSelector((state) => state.counter.value);
    const photos = useSelector((state) => state.photos.photos);
    const status = useSelector((state) => state.photos.status);
    const error = useSelector((state) => state.photos.error);
    const sepphotos = useSelector((state) => state.sepData.selectedPhoto);
    const sepphotosStatus = useSelector((state) => state.sepData.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPhotos());
        }
    }, [status,dispatch]);

    const handleShowDetails = (id) => {
      console.log("dfffdfd");
        dispatch(sepfetchPhotos(id));
    };

    return (
        <div>
            <div>
              <div><Contactlist/>
              </div>
                <h3>Count: {count}</h3>
                <button onClick={() => dispatch(increment())}>Increment</button> <br />
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(Reset(5))}>Reset</button>
            </div>

            <div>
                {status === 'loading' && <p>Loading photos...</p>}
                {status === 'failed' && <p>Error: {error}</p>}
                {status === 'succeeded' && photos.map((photo) => (
                    <div key={photo.id}>
                        <p>Album ID: {photo.albumId}</p>
                        <h1>{photo.title}</h1>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <button onClick={() => handleShowDetails(photo.id)}>Show Details</button>
                    </div>
                ))}
            </div>

            <div>
                {sepphotosStatus === 'loading' && <p>Loading photo details...</p>}
                {sepphotosStatus === 'failed' && <p>Error fetching photo details: {error}</p>}
                {sepphotosStatus === 'succeeded' && sepphotos && (
                    <div>
                        <h2>Photo Details</h2>
                        <p>Album ID: {sepphotos.albumId}</p>
                        <h1>{sepphotos.title}</h1>
                        <img src={sepphotos.url} alt={sepphotos.title} />
                        <p>{sepphotos.title}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AboutUs;


export const Contactlist=()=>{
  const [addPerson] = useAddPersonMutation();
  const[deleteUser]=useDeleteUserMutation();
  const[updatePerson]=useUpdatePersonMutation()
  const { data: user, error, isLoading } = useViewPersonQuery();
  console.log(user);
const data={
  "id":"5",
  "name":"akhil",
  "company":"amal"
}

const datas={
  "id":"88",
  "name":"akhildfdfdfdf",
  "company":"amaldfdfddfdfdd"
}
const deleteuser= async()=>{
  await deleteUser(5)
}
const  addusers= async()=>{
  await  addPerson(data)
}

const updateuser=async()=>{
  
  try {
    await updatePerson(5,datas).unwrap()
  console.log('success');
  } catch (error) {
    console.log(`Failed to update user: ${error.message}`);
  }
}
return(
   <div> {
     user?.map((users)=>(
      <div key={users.id}>
          <p>{users.name}</p>
          <p>{users.id}</p>
      </div>
     ))
    }
 
      <button onClick={addusers}>addcontacy</button> <br />
      <button onClick={deleteuser}>deleteuser</button> <br />
      <button onClick={updateuser}>updateuser</button> <br />
   </div>
)
}
