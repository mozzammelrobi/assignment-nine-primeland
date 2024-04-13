import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const detail = data.find(d => d.id == id)

    return (
  
         <div className="card bg-base-100 shadow-xl">
            <figure><img src={detail.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {detail.estate_title}</h2>
                <h2 className='font-bold'>detail.{detail.segment_name}</h2>
                <p>{detail.description}</p>
                <div className="card-actions mt-5">
                    <div className="font-bold">Price: {detail.price}</div>
                </div>
              <div>
                <h4 className="font-bold mb-3 mt-4">Property Information</h4>
              <p>consectetur adipisicing elit. Fugit recusandae vero cum, illum blanditiis voluptas sapiente? Repudiandae iusto ea accusamus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptates dolorem beatae quaerat. Optio, eius inventore rem corporis sequi recusandae eveniet temporibus fugit quasi, pariatur veritatis magni consequatur fuga quia. </p>
              </div>
                
            </div>
        </div> 
    
    
    );
};

export default CardDetails;