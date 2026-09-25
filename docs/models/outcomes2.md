# Outcomes2

Claim rules applied after the resource’s own rules when this deployment mints a resource token. Reserved claims cannot be set.

## Example Usage

```typescript
import { Outcomes2 } from "@vercel/sdk/models/updateintegrationdeploymentactionop.js";

let value: Outcomes2 = {
  kind: "<value>",
  claimRules: [
    {
      claims: {},
    },
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `kind`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `claimRules`                                                                              | [models.ClaimRules](../models/claimrules.md)[]                                            | :heavy_check_mark:                                                                        | Ordered rules resolved at mint time. Later rules win and shallow-merge over earlier ones. |