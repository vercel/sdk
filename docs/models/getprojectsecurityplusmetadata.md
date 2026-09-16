# GetProjectSecurityPlusMetadata

## Example Usage

```typescript
import { GetProjectSecurityPlusMetadata } from "@vercel/sdk/models/getprojectfrompreset.js";

let value: GetProjectSecurityPlusMetadata = {
  updatedAt: 156.72,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `firstEnabledAt`                                                                      | *number*                                                                              | :heavy_minus_sign:                                                                    | Timestamp when the feature was first enabled. Never changes after initial enablement. |
| `updatedAt`                                                                           | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |