# GetProjectTraceRequest

## Example Usage

```typescript
import { GetProjectTraceRequest } from "@vercel/sdk/models/getprojecttraceop.js";

let value: GetProjectTraceRequest = {
  projectId: "prj_123",
  requestId: "cli-req-abc",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectId`                                              | *string*                                                 | :heavy_check_mark:                                       | The project ID                                           | prj_123                                                  |
| `requestId`                                              | *string*                                                 | :heavy_check_mark:                                       | The Vercel CLI request ID associated with the trace      | cli-req-abc                                              |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |