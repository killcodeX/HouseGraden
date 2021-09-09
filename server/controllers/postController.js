import ProductMessage from "../models/productModel.js"

// for filter Product
export const filterProduct = async (req, res) => {
    try {
        if(req.body.category == "All Data"){
            const result = await ProductMessage.find();
            return res.status(200).json(result);
        }else if(req.body.category){
            const result = await ProductMessage.find(req.body);
            return res.status(200).json(result);
        }else if(req.body.rating){
            const result = await ProductMessage.find(req.body);
            return res.status(200).json(result);
        } else if(req.body.price){
            let [min, max] = req.body.price;
            const result = await ProductMessage.find();
            let arr = []
            for(let i = 0; i < result.length; i++){
                if(result[i].price >= min &&  result[i].price <= max){
                    arr.push(result[i])
                }
            }
            return res.status(200).json(arr);
        }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };