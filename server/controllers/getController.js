

// for getting all product
export const getAllProduct = async (req, res) => {
    let arr = [1,2,3,4,55,6,7,]
    try {
      res.status(200).json(arr);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };