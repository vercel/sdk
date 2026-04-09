# UpdateProjectSecurityPlusMetadata

## Example Usage

```typescript
import { UpdateProjectSecurityPlusMetadata } from "@vercel/sdk/models/updateprojectresponsebody.js";

let value: UpdateProjectSecurityPlusMetadata = {
  updatedAt: 1914.47,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `updatedAt`                                                                           | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `firstEnabledAt`                                                                      | *number*                                                                              | :heavy_minus_sign:                                                                    | Timestamp when the feature was first enabled. Never changes after initial enablement. |