# KillCommandRequest

## Example Usage

```typescript
import { KillCommandRequest } from "@vercel/sdk/models/killcommandop.js";

let value: KillCommandRequest = {
  cmdId: "cmd_abc123",
  sandboxId: "sbx_abc123",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `cmdId`                                                              | *string*                                                             | :heavy_check_mark:                                                   | The unique identifier of the command to terminate.                   | cmd_abc123                                                           |
| `sandboxId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The unique identifier of the sandbox containing the command.         | sbx_abc123                                                           |
| `teamId`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | The Team identifier to perform the request on behalf of.             | team_1a2b3c4d5e6f7g8h9i0j1k2l                                        |
| `slug`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | The Team slug to perform the request on behalf of.                   | my-team-url-slug                                                     |
| `requestBody`                                                        | [models.KillCommandRequestBody](../models/killcommandrequestbody.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |