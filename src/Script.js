function AppShop({ newShopUseS }) {
return(
    <div className="products">
    
        {newShopUseS.map((element => {
            const {id, name, searchTerm, price, image} = element;
            return(
                <div className="product-card" key={id}>

                        <img src={image} width="400xp" height="520px"/>

                    <div className="product-info">
                        <h3>{name}</h3>
                        <h4>{price}</h4>
                    </div>

                </div>
            )
        }))}
    </div>
)
}

export default AppShop;