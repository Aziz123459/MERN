import { model,Schema } from "mongoose";

const PatientSchema= new Schema(
    {
        age:{
            type:Number,
            required:[true,"age is required"],
            min:[1,"age must at least 1"],
            max:[140,"age must be less then 140"],
            validate:{
                validator: v => v>=18,
                message: "Sorry, we need a parental signature"
            }
        },
        name:{
            type:String,
            required:[true,"name is required "],
            minlength:[1,"name must have at least 1 character"],
            maxlength:[40,"name must be less then 40 character"]
        },
        symptoms:{
            type:String,
            required:[true,"symptoms is required "],
            minlength:[4,"symptoms must have at least 4 character"]
            
        }
    },
    {timestamps:true}
);

const Patients=model("Patients",PatientSchema);
export default Patients