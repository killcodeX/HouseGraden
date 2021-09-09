import ProductMessage from "../models/productModel.js"

// for filter Product
export const filterProduct = async (req, res) => {
    console.log(req.body);
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
        }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };