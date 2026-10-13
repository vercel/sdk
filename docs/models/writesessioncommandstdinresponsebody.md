# WriteSessionCommandStdinResponseBody

The data was written to the command's stdin.

## Example Usage

```typescript
import { WriteSessionCommandStdinResponseBody } from "@vercel/sdk/models/writesessioncommandstdinop.js";

let value: WriteSessionCommandStdinResponseBody = {
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
| `bytesWritten`                                                             | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `command`                                                                  | [models.SessionCommand](../models/sessioncommand.md)                       | :heavy_check_mark:                                                         | This object represents a command run in a Vercel Sandbox session (v2 API). |