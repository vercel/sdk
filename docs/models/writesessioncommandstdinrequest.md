# WriteSessionCommandStdinRequest

## Example Usage

```typescript
import { WriteSessionCommandStdinRequest } from "@vercel/sdk/models/writesessioncommandstdinop.js";

let value: WriteSessionCommandStdinRequest = {
  cmdId: "cmd_abc123",
  sessionId: "sbx_abc123",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `cmdId`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The unique identifier of the command to write to.                                              | cmd_abc123                                                                                     |
| `sessionId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The unique identifier of the session containing the command.                                   | sbx_abc123                                                                                     |
| `teamId`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | The Team identifier to perform the request on behalf of.                                       | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                  |
| `slug`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The Team slug to perform the request on behalf of.                                             | my-team-url-slug                                                                               |
| `requestBody`                                                                                  | [models.WriteSessionCommandStdinRequestBody](../models/writesessioncommandstdinrequestbody.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |