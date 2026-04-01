# UpdateMicrofrontendsRoute2

## Example Usage

```typescript
import { UpdateMicrofrontendsRoute2 } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsRoute2 = {
  has: [
    {
      type: "header",
      key: "x-vercel-ip-country",
      value: {
        eq: "<value>",
      },
    },
  ],
  mitigate: {
    action: "block_legal_cwc",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `has`                                                                                      | *models.UpdateMicrofrontendsRouteHas*[]                                                    | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `mitigate`                                                                                 | [models.UpdateMicrofrontendsRouteMitigate](../models/updatemicrofrontendsroutemitigate.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `src`                                                                                      | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |