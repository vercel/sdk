# GetProjectBoxesRequest

## Example Usage

```typescript
import { GetProjectBoxesRequest } from "@vercel/sdk/models/getprojectboxesop.js";

let value: GetProjectBoxesRequest = {
  idOrName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `idOrName`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | The unique project identifier or the project name                                            |                                                                                              |
| `limit`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | Maximum daemons to return (default: 10, max: 100)                                            |                                                                                              |
| `cursor`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Pagination cursor                                                                            |                                                                                              |
| `scopeType`                                                                                  | [models.GetProjectBoxesQueryParamScopeType](../models/getprojectboxesqueryparamscopetype.md) | :heavy_minus_sign:                                                                           | Filter by scope type                                                                         |                                                                                              |
| `scopeValue`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter by scope value (requires scopeType)                                                   |                                                                                              |
| `teamId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | The Team identifier to perform the request on behalf of.                                     | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                |
| `slug`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The Team slug to perform the request on behalf of.                                           | my-team-url-slug                                                                             |