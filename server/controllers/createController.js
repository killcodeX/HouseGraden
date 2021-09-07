

// for creating
export const createProduct = async (req, res) => {
    console.log(req.body);
    try {
      
      res.status(200).json('got data');
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };