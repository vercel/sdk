# DeleteAiGatewayByokCredentialRequest

## Example Usage

```typescript
import { DeleteAiGatewayByokCredentialRequest } from "@vercel/sdk/models/deleteaigatewaybyokcredentialop.js";

let value: DeleteAiGatewayByokCredentialRequest = {
  credentialId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `ownerId`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |                                                                               |
| `credentialId`                                                                | *string*                                                                      | :heavy_check_mark:                                                            | The unique ID of the credential to delete                                     |                                                                               |
| `userId`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | The ID of the user performing this action, used for Activity-log attribution. |                                                                               |
| `teamId`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | The Team identifier to perform the request on behalf of.                      | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                 |
| `slug`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The Team slug to perform the request on behalf of.                            | my-team-url-slug                                                              |