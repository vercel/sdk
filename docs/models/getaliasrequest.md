# GetAliasRequest

## Example Usage

```typescript
import { GetAliasRequest } from "@vercel/sdk/models/getaliasop.js";

let value: GetAliasRequest = {
  from: 1540095775951,
  idOrAlias: "example.vercel.app",
  projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
  since: 1540095775941,
  until: 1540095775951,
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `from`                                                                | *number*                                                              | :heavy_minus_sign:                                                    | Get the alias only if it was created after the provided timestamp     | 1540095775951                                                         |
| `idOrAlias`                                                           | *string*                                                              | :heavy_check_mark:                                                    | The alias or alias ID to be retrieved                                 | example.vercel.app                                                    |
| `projectId`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | Get the alias only if it is assigned to the provided project ID       | prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB                                      |
| `since`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | Get the alias only if it was created after this JavaScript timestamp  | 1540095775941                                                         |
| `until`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | Get the alias only if it was created before this JavaScript timestamp | 1540095775951                                                         |
| `teamId`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The Team identifier to perform the request on behalf of.              | team_1a2b3c4d5e6f7g8h9i0j1k2l                                         |
| `slug`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | The Team slug to perform the request on behalf of.                    | my-team-url-slug                                                      |