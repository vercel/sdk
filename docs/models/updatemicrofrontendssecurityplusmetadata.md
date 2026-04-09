# UpdateMicrofrontendsSecurityPlusMetadata

## Example Usage

```typescript
import { UpdateMicrofrontendsSecurityPlusMetadata } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsSecurityPlusMetadata = {
  updatedAt: 6592.87,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `updatedAt`                                                                           | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `firstEnabledAt`                                                                      | *number*                                                                              | :heavy_minus_sign:                                                                    | Timestamp when the feature was first enabled. Never changes after initial enablement. |