# SandboxCommand

This object represents command run in a Vercel Sandbox.

## Example Usage

```typescript
import { SandboxCommand } from "@vercel/sdk/models/sandboxcommand.js";

let value: SandboxCommand = {
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
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | The ID of the command.                                         | cmd_123a6c5209bc3778245d011443644c8d27dc2c50                   |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The name of the command.                                       | npm                                                            |
| `args`                                                         | *string*[]                                                     | :heavy_check_mark:                                             | The arguments of the command.                                  | [<br/>"run",<br/>"build"<br/>]                                 |
| `cwd`                                                          | *string*                                                       | :heavy_check_mark:                                             | The current working directory of the command.                  | /vercel/sandbox                                                |
| `sandboxId`                                                    | *string*                                                       | :heavy_check_mark:                                             | The ID of the sandbox associated with the command.             | sbx_123a6c5209bc3778245d011443644c8d27dc2c50                   |
| `exitCode`                                                     | *number*                                                       | :heavy_check_mark:                                             | If the command did finish, the exit code.                      | 0                                                              |
| `startedAt`                                                    | *number*                                                       | :heavy_check_mark:                                             | When the command was started, in milliseconds since the epoch. | 1673123456789                                                  |