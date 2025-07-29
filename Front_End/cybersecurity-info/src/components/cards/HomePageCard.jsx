const HomePageCard = ({ title, description, onClick}) => {
 
   
   

    return (



        <div className="homepage-card"
        onClick={onClick}>
           
            <h2>{title}</h2>
            <h3>{description}</h3>    
        </div>


     
        
    )

};

export default HomePageCard;