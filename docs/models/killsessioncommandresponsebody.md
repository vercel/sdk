# KillSessionCommandResponseBody

The command was terminated successfully.

## Example Usage

```typescript
import { KillSessionCommandResponseBody } from "@vercel/sdk/models/killsessioncommandop.js";

let value: KillSessionCommandResponseBody = {
  command: {
    args: [
      "run",
      "build",
    ],
    cwd: "/vercel/sandbox",
    durationMs: 1234,
    exitCode: 0,
    id: "cmd_123a6c5209bc3778245d011443644c8d27dc2c50",
    name: "npm",
    sessionId: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
    startedAt: 1673123456789,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `command`                                                                  | [models.SessionCommand](../models/sessioncommand.md)                       | :heavy_check_mark:                                                         | This object represents a command run in a Vercel Sandbox session (v2 API). |