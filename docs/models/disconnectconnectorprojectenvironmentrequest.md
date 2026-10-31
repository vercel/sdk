# DisconnectConnectorProjectEnvironmentRequest

## Example Usage

```typescript
import { DisconnectConnectorProjectEnvironmentRequest } from "@vercel/sdk/models/disconnectconnectorprojectenvironmentop.js";

let value: DisconnectConnectorProjectEnvironmentRequest = {
  connector: "<value>",
  projectId: "<id>",
  environment: "<value>",
  slug: "my-team-url-slug",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `connector`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |
| `projectId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |
| `environment`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | A built-in environment name or the stable env_* ID of a custom environment. |                                                                             |
| `slug`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         | my-team-url-slug                                                            |
| `teamId`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | The Team identifier to perform the request on behalf of.                    | team_1a2b3c4d5e6f7g8h9i0j1k2l                                               |