# SessionCommand

This object represents a command run in a Vercel Sandbox session (v2 API).

## Example Usage

```typescript
import { SessionCommand } from "@vercel/sdk/models/sessioncommand.js";

let value: SessionCommand = {
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
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `args`                                                         | *string*[]                                                     | :heavy_check_mark:                                             | The arguments of the command.                                  | [<br/>"run",<br/>"build"<br/>]                                 |
| `cwd`                                                          | *string*                                                       | :heavy_check_mark:                                             | The current working directory of the command.                  | /vercel/sandbox                                                |
| `durationMs`                                                   | *number*                                                       | :heavy_minus_sign:                                             | Duration of the command execution in milliseconds.             | 1234                                                           |
| `exitCode`                                                     | *number*                                                       | :heavy_check_mark:                                             | If the command did finish, the exit code.                      | 0                                                              |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | The ID of the command.                                         | cmd_123a6c5209bc3778245d011443644c8d27dc2c50                   |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The name of the command.                                       | npm                                                            |
| `sessionId`                                                    | *string*                                                       | :heavy_check_mark:                                             | The ID of the session associated with the command.             | sbx_123a6c5209bc3778245d011443644c8d27dc2c50                   |
| `startedAt`                                                    | *number*                                                       | :heavy_check_mark:                                             | When the command was started, in milliseconds since the epoch. | 1673123456789                                                  |