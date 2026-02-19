# DeleteFlagRequest

## Example Usage

```typescript
import { DeleteFlagRequest } from "@vercel/sdk/models/deleteflagop.js";

let value: DeleteFlagRequest = {
  projectIdOrName: "<value>",
  flagIdOrSlug: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `projectIdOrName`                                                     | *string*                                                              | :heavy_check_mark:                                                    | The project id or name                                                |                                                                       |
| `flagIdOrSlug`                                                        | *string*                                                              | :heavy_check_mark:                                                    | The flag id or name                                                   |                                                                       |
| `ifMatch`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | Etag to match, can be used interchangeably with the `if-match` header |                                                                       |
| `withMetadata`                                                        | *boolean*                                                             | :heavy_minus_sign:                                                    | Whether to include metadata in the response                           |                                                                       |
| `teamId`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The Team identifier to perform the request on behalf of.              | team_1a2b3c4d5e6f7g8h9i0j1k2l                                         |
| `slug`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | The Team slug to perform the request on behalf of.                    | my-team-url-slug                                                      |