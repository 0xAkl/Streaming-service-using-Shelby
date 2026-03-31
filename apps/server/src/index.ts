
import Fastify from "fastify";
import dotenv from "dotenv";
import { startFFmpegIngest } from "./services/ffmpeg";
import { watchSegments } from "./services/segmentWatcher";
import { ShelbyClient } from "@veritasstream/shelby";

dotenv.config();
const app = Fastify({ bodyLimit: 50*1024*1024 });

const shelby = new ShelbyClient({});
shelby.faucet("test-user",10);

const streams = new Map();

app.post("/stream/start", async (req:any)=>{
  const {streamId}=req.body;
  streams.set(streamId,{});
  startFFmpegIngest(streamId);
  watchSegments(streamId);
  return {streamId};
});

app.get("/balance/:user", async (req:any)=>{
  return {balance: shelby.getBalance(req.params.user)};
});

app.listen({port:4000});
