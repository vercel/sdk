# CreateEdgeConfigRequest

## Example Usage

```typescript
import { CreateEdgeConfigRequest } from "@vercel/sdk/models/createedgeconfigop.js";

let value: CreateEdgeConfigRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `teamId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | The Team identifier to perform the request on behalf of.                       | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                  |
| `slug`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The Team slug to perform the request on behalf of.                             | my-team-url-slug                                                               |
| `requestBody`                                                                  | [models.CreateEdgeConfigRequestBody](../models/createedgeconfigrequestbody.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |