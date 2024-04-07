import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { IoShapesSharp } from "react-icons/io5";

const EstateCard = ({ estate }) => {
    const { id,image, estate_title, segment_name, description, price,status,area, location,facilities } = estate
    return (
        <div className="card  bg-base-100 shadow-xl shadow-[#FD6E0A66]">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {estate_title}</h2>
                <h2 className='font-bold'>{segment_name}</h2>
                <p>{description}</p>
                <div className="card-actions mt-5">
                    <div className="font-bold">Price: {price}</div>
                    <div className="badge badge-outline font-bold text-[#FD6E0A]"> status:{status}</div>
                </div>
                <div>
                    <p className='flex gap-3 items-center'><IoShapesSharp/> Area:{area} </p>
                    <p className='flex gap-3 items-center'><MdLocationPin/> {location}</p>
                </div>
                <div className='flex gap-0'>
                    {
                        facilities?.map((f,i) => <p key={i} className='font-bold ml-1'>{f}</p>)
                    }
                </div>
                <Link to={`/details/${id}`}> <button className='btn btn-sm  mt-5 text-white bg-[#FD6E0A] w-full'>View details</button></Link>
            </div>
        </div>
    );
};

export default EstateCard;
EstateCard.propTypes = {
    estate: PropTypes.node,
}