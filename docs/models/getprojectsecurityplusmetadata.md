# GetProjectSecurityPlusMetadata

## Example Usage

```typescript
import { GetProjectSecurityPlusMetadata } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectSecurityPlusMetadata = {
  updatedAt: 156.72,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `updatedAt`                                                                           | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `firstEnabledAt`                                                                      | *number*                                                                              | :heavy_minus_sign:                                                                    | Timestamp when the feature was first enabled. Never changes after initial enablement. |