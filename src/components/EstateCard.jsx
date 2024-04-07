import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EstateCard = ({ estate }) => {
    const { id, estate_title, segment_name, description } = estate
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {estate_title}</h2>
                <h2 className='font-bold'>{segment_name}</h2>
                <p>{description}</p>
                <div className="card-actions ">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
                <Link to={`/details/${id}`}> <button className='btn btn-sm w-full'>View details</button></Link>
            </div>
        </div>
    );
};

export default EstateCard;
EstateCard.propTypes = {
    estate: PropTypes.node,
}