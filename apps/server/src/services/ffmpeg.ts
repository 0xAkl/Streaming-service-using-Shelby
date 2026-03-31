
import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";

export function startFFmpegIngest(streamId:string){
  const out = path.join(__dirname,"../../tmp",streamId);
  if(!fs.existsSync(out)) fs.mkdirSync(out,{recursive:true});

  ffmpeg(`rtmp://localhost:1935/live/${streamId}`)
    .videoCodec("libx264")
    .format("segment")
    .outputOptions(["-segment_time 2","-reset_timestamps 1"])
    .output(path.join(out,"seg_%03d.mp4"))
    .run();
}
