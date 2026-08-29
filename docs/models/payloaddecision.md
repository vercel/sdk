# PayloadDecision

## Example Usage

```typescript
import { PayloadDecision } from "@vercel/sdk/models/fourhundredandone.js";

let value: PayloadDecision = {
  authoritative: false,
  basis: "workspace-mx",
  emailDomain: "<value>",
  emailVerified: true,
  hostedDomainMatch: true,
  mxOutcome: "non-google",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `authoritative`                            | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |
| `basis`                                    | [models.Basis](../models/basis.md)         | :heavy_check_mark:                         | N/A                                        |
| `emailDomain`                              | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `emailVerified`                            | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |
| `hostedDomainMatch`                        | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |
| `mxOutcome`                                | [models.MxOutcome](../models/mxoutcome.md) | :heavy_check_mark:                         | N/A                                        |