
import chokidar from "chokidar";
import fs from "fs";
import path from "path";

export function watchSegments(streamId:string){
  const dir = path.join(__dirname,"../../tmp",streamId);
  chokidar.watch(dir).on("add",(file)=>{
    console.log("segment:",file);
  });
}
