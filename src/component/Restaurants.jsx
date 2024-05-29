import { useEffect, useState } from "react"
import ResCard from "./Rescard"


const Restaurants=()=>{
    const [restaurantList,setRestaurant] = useState([])
    const [functiondatalist,setfunctiondata] =useState([])
    const [searchtext,setSearchText] = useState([])
    useEffect(() => {
        fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
          .then((res) => res.json())
          .then((json) => {
            
            const res = json.data.cards.find(item => item.card.card.id === "restaurant_grid_listing")
            const restaurantsArr = res.card.card.gridElements.infoWithStyle.restaurants
         
            const restaurants=restaurantsArr.map(items=>items.info)
            setRestaurant(restaurants)
            setfunctiondata(restaurants)
            console.log(restaurants)
            
            
          })
        
          
      }, [])

      const filterTopRestaurants=()=>{
        const res =functiondatalist.filter((r)=>r.avgRating>4.5)
        setRestaurant(res)
        
      }
      const sortRestaurants=()=>{
        const res =functiondatalist.sort((a,b) => b.avgRating-a.avgRating)
        setRestaurant([...res])
      }
      const handleInputChange=(e)=>{
        setSearchText(e.target.value)
      }
      const searchrestaurants=()=>{
        const res1=functiondatalist.filter((r)=>{return r.name.includes(searchtext)})
        setRestaurant(res1)
      }
    
      
      if(functiondatalist.length===0){
        return <div className="load">Loading.........</div>
      }
    return (
      
        
    <>
     <div className="location">
                <aside>
                    <details>
                        <summary ><img src="location.png"></img></summary>
                        <ul className="location-list">
                          <li><a href="">Coimbatore</a></li>
                          <li><a href="">Chennai</a></li>
                          <li><a href="">Trichy</a></li>
                          <li><a href="">Madurai</a></li>
                          <li><a href="">Ooty</a></li>
                        </ul>
                    </details>
                </aside>
            </div>
  <div className="topbar">
  <div className="searchbox">
      <div>
    <span><input className="SearchItem" placeholder="        Search Item " value={searchtext} onChange={handleInputChange}></input></span>
    </div>
    <div>
               <button className="searchbutton"onClick={searchrestaurants}>Search </button>
                </div>            
    </div>
    <span><button className="button" onClick={filterTopRestaurants}>Filter</button></span>
    <span><button className="button" onClick={sortRestaurants}>Sort By Rating</button></span>
  </div>
            
    <div className="topic"><span className="r">R</span><span className="remr">estaurants</span></div>

{ (restaurantList.length===0) ? (<div className="notfound"><h1> Data Not Found</h1></div>) :
    (<div className="res-container">
     
      
{restaurantList.map((res)=><ResCard restaurant={res}/>)}


</div>)
}


 

    
    
    </>
    
    )
}
export default Restaurants