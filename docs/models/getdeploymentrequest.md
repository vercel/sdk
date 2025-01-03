# GetDeploymentRequest

## Example Usage

```typescript
import { GetDeploymentRequest } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentRequest = {
  idOrUrl: "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  withGitRepoInfo: "true",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `idOrUrl`                                                | *string*                                                 | :heavy_check_mark:                                       | The unique identifier or hostname of the deployment.     | dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ                         |
| `withGitRepoInfo`                                        | *string*                                                 | :heavy_minus_sign:                                       | Whether to add in gitRepo information.                   | true                                                     |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |