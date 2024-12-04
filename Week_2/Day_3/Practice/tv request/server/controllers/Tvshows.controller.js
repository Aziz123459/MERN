import tvShows from "../models/Tvshows.module.js";

const tvShowController={
    readAll:(req,res)=>{
        res.json(tvShows)
    },
    readYear:(req,res)=>{
        const getShowsByYear=tvShows.filter(tvShow=> tvShow.yearCreated == req.params.yearCreated)
        console.log(getShowsByYear);
        res.json(getShowsByYear)
        
    },
    delete:(req,res)=>{
        const title=req.params.tvShow;
        const index=tvShows.findIndex(tvshow=>tvshow.tvShow ==title);
        tvShows.splice(index,1);
        res.json(tvShows);
    },
    update:(req,res)=>{
        tvShows.forEach((tvshow,idx)=>{
            if(tvshow.tvShow==req.params.tvShow){
                tvshow.starring=req.body.starring
            }
            
        })
        const updateShow=tvShows.find(tvshow=>tvshow.tvShow ==req.params.tvShow)
        res.json(updateShow);
    },
    creat:(req,res)=>{
        tvShows.push(req.body);
        res.json(tvShows)
    }

}
export default tvShowController