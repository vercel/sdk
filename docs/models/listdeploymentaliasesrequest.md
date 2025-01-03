# ListDeploymentAliasesRequest

## Example Usage

```typescript
import { ListDeploymentAliasesRequest } from "@vercel/sdk/models/listdeploymentaliasesop.js";

let value: ListDeploymentAliasesRequest = {
  id: "dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | The ID of the deployment the aliases should be listed for | dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa                          |
| `teamId`                                                  | *string*                                                  | :heavy_minus_sign:                                        | The Team identifier to perform the request on behalf of.  | team_1a2b3c4d5e6f7g8h9i0j1k2l                             |
| `slug`                                                    | *string*                                                  | :heavy_minus_sign:                                        | The Team slug to perform the request on behalf of.        | my-team-url-slug                                          |