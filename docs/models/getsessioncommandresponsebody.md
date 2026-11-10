# GetSessionCommandResponseBody

The command data. `exitCode` is set if this or a previous request waited for the command to finish, and `null` otherwise.

## Example Usage

```typescript
import { GetSessionCommandResponseBody } from "@vercel/sdk/models/getsessioncommandop.js";

let value: GetSessionCommandResponseBody = {
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