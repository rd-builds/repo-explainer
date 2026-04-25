# GitPulse AI — GitHub Repo Explainer

A pixel-perfect dark glassmorphism SaaS frontend built with Vite + React + Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Backend

The app expects a backend at `http://localhost:5000/explain` (POST).

**Request body:**
```json
{ "repoUrl": "https://github.com/username/repo" }
```

**Expected response:**
```json
{
  "summary": "Short summary of the repository...",
  "explanation": {
    "pattern": "Producer-Consumer pattern",
    "mainText": "The core architecture follows...",
    "sections": [
      { "title": "Internal Workflow", "items": ["State management via Raft", "..."] },
      { "title": "Concurrency Model", "items": ["Lock-free data structures", "..."] }
    ],
    "footer": "Unlike traditional task queues..."
  },
  "techStack": ["Rust", "Tokio", "gRPC", "Redis", "Protobuf"],
  "beginnerLevel": {
    "level": 3,
    "description": "Requires solid understanding of distributed systems."
  },
  "warnings": [
    { "message": "Complex manual memory management in core module.", "severity": "warning" },
    { "message": "Experimental Feature: SIMD acceleration is unstable.", "severity": "error" }
  ],
  "stats": {
    "stars": "12.4k",
    "forks": "892",
    "openPRs": "42",
    "uptime": "100%"
  }
}
```

## Project Structure

```
src/
  components/   — Reusable UI components
  pages/        — Route-level pages
  services/     — API client
  hooks/        — Custom React hooks
```
