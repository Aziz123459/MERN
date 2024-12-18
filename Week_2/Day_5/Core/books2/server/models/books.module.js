import {model,Schema} from 'mongoose';
const BooksSchema= new Schema(
    {
        title:{
            type:String,
            required: [true, "title is required!"],
            minlength: [2, "title must be at least 2 characters long!"],
            maxlength: [255, "title must be less than 255 characters long"]
        },
        author:{
            type:String,
            required: [true, "title is required!"],
            minlength: [5, "title must be at least 2 characters long!"],
            maxlength: [255, "title must be less than 255 characters long"]
        },
        pages:{
            type: Number,
            required: [true, "pages is required!"],
            min: [1, "A book must have at least one page"]

        },
        isAvailable:{
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Books = model("Books", BooksSchema);
export default Books;