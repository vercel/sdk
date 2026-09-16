# UpdateMicrofrontendsBlockHistory1

## Example Usage

```typescript
import { UpdateMicrofrontendsBlockHistory1 } from "@vercel/sdk/models/updatemicrofrontendshaskey.js";

let value: UpdateMicrofrontendsBlockHistory1 = {
  action: "blocked",
  createdAt: 8310.26,
  reason: "<value>",
  statusCode: 1224.12,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `action`              | *"blocked"*           | :heavy_check_mark:    | N/A                   |
| `actor`               | *string*              | :heavy_minus_sign:    | N/A                   |
| `caseId`              | *string*              | :heavy_minus_sign:    | N/A                   |
| `comment`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `createdAt`           | *number*              | :heavy_check_mark:    | N/A                   |
| `ineligibleForAppeal` | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `isCascading`         | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `reason`              | *string*              | :heavy_check_mark:    | N/A                   |
| `statusCode`          | *number*              | :heavy_check_mark:    | N/A                   |