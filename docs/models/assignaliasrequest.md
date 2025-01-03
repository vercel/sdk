# AssignAliasRequest

## Example Usage

```typescript
import { AssignAliasRequest } from "@vercel/sdk/models/assignaliasop.js";

let value: AssignAliasRequest = {
  id: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    alias: "my-alias.vercel.app",
    redirect: null,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The ID of the deployment the aliases should be listed for            |                                                                      |
| `teamId`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | The Team identifier to perform the request on behalf of.             | team_1a2b3c4d5e6f7g8h9i0j1k2l                                        |
| `slug`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | The Team slug to perform the request on behalf of.                   | my-team-url-slug                                                     |
| `requestBody`                                                        | [models.AssignAliasRequestBody](../models/assignaliasrequestbody.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |