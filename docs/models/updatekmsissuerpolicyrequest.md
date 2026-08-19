# UpdateKmsIssuerPolicyRequest

## Example Usage

```typescript
import { UpdateKmsIssuerPolicyRequest } from "@vercel/sdk/models/updatekmsissuerpolicyop.js";

let value: UpdateKmsIssuerPolicyRequest = {
  issuerId: "<id>",
  kind: "project-grant",
  policyKey: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `issuerId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | The ID of the issuer.                                                                    |                                                                                          |
| `kind`                                                                                   | [models.PathParamKind](../models/pathparamkind.md)                                       | :heavy_check_mark:                                                                       | The issuer policy kind.                                                                  |                                                                                          |
| `policyKey`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | The policy identifier.                                                                   |                                                                                          |
| `teamId`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Team identifier to perform the request on behalf of.                                 | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                            |
| `slug`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Team slug to perform the request on behalf of.                                       | my-team-url-slug                                                                         |
| `requestBody`                                                                            | [models.UpdateKmsIssuerPolicyRequestBody](../models/updatekmsissuerpolicyrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |