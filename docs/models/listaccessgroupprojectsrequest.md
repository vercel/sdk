# ListAccessGroupProjectsRequest

## Example Usage

```typescript
import { ListAccessGroupProjectsRequest } from "@vercel/sdk/models/listaccessgroupprojectsop.js";

let value: ListAccessGroupProjectsRequest = {
  idOrName: "ag_pavWOn1iLObbXLRiwVvzmPrTWyTf",
  limit: 20,
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `idOrName`                                                | *string*                                                  | :heavy_check_mark:                                        | The ID or name of the Access Group.                       | ag_pavWOn1iLObbXLRiwVvzmPrTWyTf                           |
| `limit`                                                   | *number*                                                  | :heavy_minus_sign:                                        | Limit how many access group projects should be returned.  | 20                                                        |
| `next`                                                    | *string*                                                  | :heavy_minus_sign:                                        | Continuation cursor to retrieve the next page of results. |                                                           |
| `teamId`                                                  | *string*                                                  | :heavy_minus_sign:                                        | The Team identifier to perform the request on behalf of.  | team_1a2b3c4d5e6f7g8h9i0j1k2l                             |
| `slug`                                                    | *string*                                                  | :heavy_minus_sign:                                        | The Team slug to perform the request on behalf of.        | my-team-url-slug                                          |