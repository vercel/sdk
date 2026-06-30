# ResponseBodySecurityPlusMetadata

## Example Usage

```typescript
import { ResponseBodySecurityPlusMetadata } from "@vercel/sdk/models/getprojectsresponsebody.js";

let value: ResponseBodySecurityPlusMetadata = {
  updatedAt: 8782.92,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `updatedAt`                                                                           | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `firstEnabledAt`                                                                      | *number*                                                                              | :heavy_minus_sign:                                                                    | Timestamp when the feature was first enabled. Never changes after initial enablement. |