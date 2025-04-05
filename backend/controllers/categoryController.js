import categoryModel  from "../model/categoryModel.js"


export const postCategory = async (req,res)=>{
    try {
        const {category}=req.body
        let categories = await categoryModel.create({category:category})
        res.send(categories)
        
    } catch (error) {
       console.log(error); 
    }
}

export const getCategory = async (req,res)=>{
    try {
        const categories = await categoryModel.find(req.body)
        res.send(categories)
        console.log(categories);
    } catch (error) {
        console.log(error);
    }
}

export const updateCategory = async (req,res)=>{
    try {
        const id=req.params.id
        const {category} = req.body
        let updatecategories = await categoryModel.findByIdAndUpdate({_id:id},{category})
        res.send(updatecategories)
        console.log(updatecategories);
    } catch (error) {
        console.log(error);
    }
}

export const getCategoryById = async (req,res)=>{
    try {
        const id=req.params.id
        const getCategoriesById = await movieModel.findById({_id:id})
        res.json(getCategoriesById)
        console.log(getCategoriesById);
    } catch (error) {
        console.log(error);
    }
}

export const deleteCategoryById =async (req,res)=>{
    try {
        const id=req.params.id
        const deleteCategoriesById = await movieModel.findByIdAndDelete({_id:id})
        res.json(categories)
        console.log(deleteCategoriesById);
    } catch (error) {
        console.log(error);
    }
}

