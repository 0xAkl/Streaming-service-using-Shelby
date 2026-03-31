
# V Stream

A decentralized live-streaming MVP with:
- FFmpeg real video ingestion (RTMP)
- Chunked fMP4 streaming
- AES-256 encryption
- Per-second micropayments
- Token-based DRM access
- Shelby decentralized storage abstraction

## Architecture

OBS → RTMP → FFmpeg → fMP4 segments → Encryption → Shelby → Backend → Player (MSE)

## Features

- Real-time streaming pipeline
- Low-latency segmented playback
- Wallet-ready micropayment system
- Secure token-gated access
- Modular TypeScript monorepo

## Setup

### 1. Install
npm install

### 2. Run services
npm run dev:server
npm run dev:web
npm run dev:rtmp

### 3. OBS config
Server: rtmp://localhost:1935/live
Stream key: stream-1

## Flow

1. Start stream from UI
2. Start OBS stream
3. Segments generated and uploaded
4. Viewer opens /watch/stream-1
5. Video plays and balance drains

## Notes

- Shelby is simulated but structured for real integration
- Uses fMP4 for MSE playback
- Designed for extension to WebRTC / HLS

## Future Improvements

- WebRTC ingest (<1s latency)
- Adaptive bitrate streaming
- GPU encoding
- Real blockchain payments
