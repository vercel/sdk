# RunCommandSandboxesResponseBody

## Example Usage

```typescript
import { RunCommandSandboxesResponseBody } from "@vercel/sdk/models/runcommandop.js";

let value: RunCommandSandboxesResponseBody = {
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