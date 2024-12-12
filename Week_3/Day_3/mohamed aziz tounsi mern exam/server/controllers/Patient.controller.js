import { response } from "express";
import Patients from "../models/patient.model.js";

const PatientsController={
    creat: async(req,res)=>{
        try{
            const newPatient=await Patients.create(req.body)
            res.json(newPatient)
        }
        catch(err){
            console.log(err);
            res.status(400).json(err)
        }
    },
    ReadAll:async(req,res)=>{
        try{
            const AllPatient=await Patients.find()
            res.json(AllPatient)
        }
        catch(err){
            console.log(err);
            res.status(400).json(err)
        }
    },
    ReadOne:async(req,res)=>{
        try{
            const onePatient=await Patients.findById(req.params.id)
            res.json(onePatient)
        }
        catch(err){
            console.log(err);
            res.status(400).json(err)
        }
    },
    update:async(req,res)=>{
        const options={
            new:true,
            runValidators:true
        }
        try{
            const UpPatient=await Patients.findByIdAndUpdate(req.params.id,req.body,options)
            res.json(UpPatient)
        }
        catch(err){
            console.log(err);
            res.status(400).json(err)
        }
    },
    delete:async(req,res)=>{
        try{
            const DeletePatient=await Patients.findByIdAndDelete(req.params.id)
            res.json({response:"delete with success"})
        }
        catch(err){
            console.log(err);
            res.status(400).json(err)
        }
    }
}
export default PatientsController