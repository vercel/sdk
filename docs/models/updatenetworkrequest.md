# UpdateNetworkRequest

## Example Usage

```typescript
import { UpdateNetworkRequest } from "@vercel/sdk/models/updatenetworkop.js";

let value: UpdateNetworkRequest = {
  networkId: "uzrmorq7bn05z-fz",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `networkId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | The unique identifier of the Secure Compute network                      | uzrmorq7bn05z-fz                                                         |
| `teamId`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | The Team identifier to perform the request on behalf of.                 | team_1a2b3c4d5e6f7g8h9i0j1k2l                                            |
| `slug`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | The Team slug to perform the request on behalf of.                       | my-team-url-slug                                                         |
| `requestBody`                                                            | [models.UpdateNetworkRequestBody](../models/updatenetworkrequestbody.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |