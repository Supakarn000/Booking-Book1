import book_models from "../models/book_models.js";
import room_models from "../models/room_models.js";

export const createBook = async(req,res,next)=>{
    const newBook = new book_models(req.body)
    try{
        const savedBook = await newBook.save()
        res.status(200).json(savedBook)

    }catch(err){
        next(err);
    }
}

export const updateBook = async(req,res,next)=>{
    try{
        const updatedBook = await book_models.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedBook)

    }catch(err){
        next(err);
    }
}

export const deleteBook = async(req,res,next)=>{
    try{
        await book_models.findByIdAndDelete(req.params.id)
        res.status(200).json("book has been deleted")

    }catch(err){
        next(err);
    }

}

export const getBook = async(req,res,next)=>{
    try{
        const book = await book_models.findById(req.params.id)
        res.status(200).json(book)

    }catch(err){
        next(err);
    }
}

export const getallBook = async(req,res,next)=>{
    try{
        const books = await book_models.find()
        res.status(200).json(books)

    }catch(err){
        next(err);
    }
}

export const countBytype1 = async (req, res, next) => {
    const type1 = req.query.type1.split(",");
    try {
      const list = await Promise.all(
        type1.map((type) => {
          return book_models.countDocuments({type: type});
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
};

export const countBytype2 = async (req, res, next) => {
    try {
      const HorrorCount = await book_models.countDocuments({ type: "Horror" });
      const EducationCount = await book_models.countDocuments({ type: "Education" });
      const MysteryCount = await book_models.countDocuments({ type: "Mystery" });
      const FantasyCount = await book_models.countDocuments({ type: "Fantasy" });
      const HistoryCount = await book_models.countDocuments({ type: "History"});
  
      res.status(200).json([
        { type: "Horror", count: HorrorCount },
        { type: "Education", count: EducationCount },
        { type: "Mystery", count: MysteryCount },
        { type: "Fantasy", count: FantasyCount },
        { type: "History", count: HistoryCount },
      ]);
    } catch (err) {
      next(err);
    }
  };


  export const getBookRooms = async(req,res,next)=>{
    try {
        const book1 = await book_models.findById(req.params.id)
        if (!book1) {
            throw new Error("Book not found")
        }
        const list = await Promise.all(book1.rooms.map(room=>{
            return room_models.findById(room)
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}
