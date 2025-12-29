import { useOptimistic, useState } from "react";

const updateNewLike = (newLike) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(newLike);
        }, 2000);
    })
}

export default function UpdateButton(){
    const [ updateLike, setUpdateLike ] = useState(null);
    const [ optimisticLike, setOptimisticLike ] = useOptimistic(20);

   const formAction = async () => {
    setOptimisticLike(optimisticLike + 1);
    try{
   
       const likeUpdation = await updateNewLike(optimisticLike +1);
       console.log("The like has been updated to the server.");

    }catch(err){
        console.error(err);
        setOptimisticLike(optimisticLike - 1);
    }
   }

    return (
        <>
        <form action = {formAction}>
            <h3>Total likes:{updateLike ? updateLike : optimisticLike}</h3>
            <p>
                <button type = "submit">Like</button>
            </p>
        </form>
        </>
    )
}