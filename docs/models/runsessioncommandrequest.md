# RunSessionCommandRequest

## Example Usage

```typescript
import { RunSessionCommandRequest } from "@vercel/sdk/models/runsessioncommandop.js";

let value: RunSessionCommandRequest = {
  sessionId: "sbx_abc123",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `sessionId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The unique identifier of the session in which to execute the command.            | sbx_abc123                                                                       |
| `teamId`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | The Team identifier to perform the request on behalf of.                         | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                    |
| `slug`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The Team slug to perform the request on behalf of.                               | my-team-url-slug                                                                 |
| `requestBody`                                                                    | [models.RunSessionCommandRequestBody](../models/runsessioncommandrequestbody.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |