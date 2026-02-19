# GetCommandResponseBody

The command data along with the exit code if the command did finish.

## Example Usage

```typescript
import { GetCommandResponseBody } from "@vercel/sdk/models/getcommandop.js";

let value: GetCommandResponseBody = {
  command: {
    id: "cmd_123a6c5209bc3778245d011443644c8d27dc2c50",
    name: "npm",
    args: [
      "run",
      "build",
    ],
    cwd: "/vercel/sandbox",
    sandboxId: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
    exitCode: 0,
    startedAt: 1673123456789,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `command`                                               | [models.SandboxCommand](../models/sandboxcommand.md)    | :heavy_check_mark:                                      | This object represents command run in a Vercel Sandbox. |