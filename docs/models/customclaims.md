# CustomClaims

Custom claims embedded in the resource tokens Vercel mints for this resource.

## Example Usage

```typescript
import { CustomClaims } from "@vercel/sdk/models/importresourceop.js";

let value: CustomClaims = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `roles`                                                                                         | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | Roles a deployment may request when minting a token. The selected role becomes the `sub` claim. |
| `defaultRole`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | Role used when the deployment does not request one. Required when `roles` is set.               |
| `claimRules`                                                                                    | [models.ImportResourceClaimRules](../models/importresourceclaimrules.md)[]                      | :heavy_minus_sign:                                                                              | Ordered rules resolved at mint time. Later rules win and shallow-merge over earlier ones.       |