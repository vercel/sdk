# CreateSessionSnapshotRequest

## Example Usage

```typescript
import { CreateSessionSnapshotRequest } from "@vercel/sdk/models/createsessionsnapshotop.js";

let value: CreateSessionSnapshotRequest = {
  sessionId: "sbx_abc123",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `sessionId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | The unique identifier of the session to snapshot.                                        | sbx_abc123                                                                               |
| `teamId`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Team identifier to perform the request on behalf of.                                 | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                            |
| `slug`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Team slug to perform the request on behalf of.                                       | my-team-url-slug                                                                         |
| `requestBody`                                                                            | [models.CreateSessionSnapshotRequestBody](../models/createsessionsnapshotrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |