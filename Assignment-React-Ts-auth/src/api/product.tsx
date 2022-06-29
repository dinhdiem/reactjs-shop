import { ProductType } from "../types/ProductType";
import instance from "./instance";
import { isAuth } from "../utils/setLocalstorage";

const {token , user} = isAuth();

class ApiProduct{
    add = (data : ProductType)=> {
        const url = `product/${user._id}`;
        return instance.post(url, data , 
            {
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            }    
        );
    }

    readAll = () =>{
        const url = `product`;
        return instance.get(url);
    }
    
    read = (id :string) =>{
        const url = `product/${id}`;
        return instance.get(url);
    }
    
    remove = (id :string) => {
        const url = `product/${id}`;
        return instance.delete(url)
    }
    
    update = (product : ProductType) => {
        console.log(product);
        const url = `product/${product._id}`;
        return instance.put(url, product);
    }
}

export default new ApiProduct;

