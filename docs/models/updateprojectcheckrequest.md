# UpdateProjectCheckRequest

## Example Usage

```typescript
import { UpdateProjectCheckRequest } from "@vercel/sdk/models/updateprojectcheckop.js";

let value: UpdateProjectCheckRequest = {
  projectIdOrName: "<value>",
  checkId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `checkId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `teamId`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | The Team identifier to perform the request on behalf of.                           | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                      |
| `slug`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | The Team slug to perform the request on behalf of.                                 | my-team-url-slug                                                                   |
| `requestBody`                                                                      | [models.UpdateProjectCheckRequestBody](../models/updateprojectcheckrequestbody.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |