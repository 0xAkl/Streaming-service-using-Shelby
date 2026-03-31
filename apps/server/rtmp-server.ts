
import NodeMediaServer from "node-media-server";

const nms = new NodeMediaServer({
  rtmp: { port:1935 }
});

nms.run();
