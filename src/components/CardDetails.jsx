import { useLoaderData, useParams } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { IoShapesSharp } from "react-icons/io5";

const CardDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const detail = data.find(d => d.id == id)

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={detail.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {detail.estate_title}</h2>
                <h2 className='font-bold'>detail.{detail.segment_name}</h2>
                <p>{detail.description}</p>
                <div className="card-actions mt-5">
                    <div className="font-bold">Price: {detail.price}</div>
                    <div className="badge badge-outline"> status:{detail.status}</div>
                </div>
                <div>
                    <p className='flex gap-3 items-center'><IoShapesSharp /> Area:{detail.area} </p>
                    <p className='flex gap-3 items-center'><MdLocationPin /> {detail.location}</p>
                </div>
                <div className='flex justify-around mb-5'>
                    {
                        detail?.facilities?.map((f, i) => <p key={i} className='font-bold'>{f}</p>)
                    }
                </div>

            </div>
        </div> 
    );
};

export default CardDetails;