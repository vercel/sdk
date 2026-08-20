# DeleteKmsIssuerPolicyRequest

## Example Usage

```typescript
import { DeleteKmsIssuerPolicyRequest } from "@vercel/sdk/models/deletekmsissuerpolicyop.js";

let value: DeleteKmsIssuerPolicyRequest = {
  issuerId: "<id>",
  kind: "project-grant",
  policyKey: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `issuerId`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the issuer.                                                                        |                                                                                              |
| `kind`                                                                                       | [models.DeleteKmsIssuerPolicyPathParamKind](../models/deletekmsissuerpolicypathparamkind.md) | :heavy_check_mark:                                                                           | The issuer policy kind.                                                                      |                                                                                              |
| `policyKey`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | The policy identifier.                                                                       |                                                                                              |
| `teamId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | The Team identifier to perform the request on behalf of.                                     | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                |
| `slug`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The Team slug to perform the request on behalf of.                                           | my-team-url-slug                                                                             |