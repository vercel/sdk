# UpdateKmsIssuerRequest

## Example Usage

```typescript
import { UpdateKmsIssuerRequest } from "@vercel/sdk/models/updatekmsissuerop.js";

let value: UpdateKmsIssuerRequest = {
  issuerId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `issuerId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | The ID of the issuer.                                                        |                                                                              |
| `teamId`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | The Team identifier to perform the request on behalf of.                     | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                |
| `slug`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The Team slug to perform the request on behalf of.                           | my-team-url-slug                                                             |
| `requestBody`                                                                | [models.UpdateKmsIssuerRequestBody](../models/updatekmsissuerrequestbody.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |