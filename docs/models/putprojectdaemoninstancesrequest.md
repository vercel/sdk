# PutProjectDaemonInstancesRequest

## Example Usage

```typescript
import { PutProjectDaemonInstancesRequest } from "@vercel/sdk/models/putprojectdaemoninstancesop.js";

let value: PutProjectDaemonInstancesRequest = {
  idOrName: "<value>",
  daemonName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `idOrName`                                               | *string*                                                 | :heavy_check_mark:                                       | The unique project identifier or the project name        |                                                          |
| `daemonName`                                             | *string*                                                 | :heavy_check_mark:                                       | The name of the daemon to scale                          |                                                          |
| `target`                                                 | [models.QueryParamTarget](../models/queryparamtarget.md) | :heavy_minus_sign:                                       | The deployment target for the daemon configuration.      |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |
| `requestBody`                                            | Record<string, *number*>                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |