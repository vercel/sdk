# InvalidateByTagsRequest

## Example Usage

```typescript
import { InvalidateByTagsRequest } from "@vercel/sdk/models/invalidatebytagsop.js";

let value: InvalidateByTagsRequest = {
  projectIdOrName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectIdOrName`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `teamId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | The Team identifier to perform the request on behalf of.                       | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                  |
| `slug`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The Team slug to perform the request on behalf of.                             | my-team-url-slug                                                               |
| `requestBody`                                                                  | [models.InvalidateByTagsRequestBody](../models/invalidatebytagsrequestbody.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |