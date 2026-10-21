# RestartProjectDaemonInstanceRequest

## Example Usage

```typescript
import { RestartProjectDaemonInstanceRequest } from "@vercel/sdk/models/restartprojectdaemoninstanceop.js";

let value: RestartProjectDaemonInstanceRequest = {
  idOrName: "<value>",
  daemonName: "<value>",
  instanceId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `idOrName`                                               | *string*                                                 | :heavy_check_mark:                                       | The unique project identifier or the project name        |                                                          |
| `daemonName`                                             | *string*                                                 | :heavy_check_mark:                                       | The name of the daemon that owns the instance            |                                                          |
| `instanceId`                                             | *string*                                                 | :heavy_check_mark:                                       | The ID of the daemon instance to restart                 |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |