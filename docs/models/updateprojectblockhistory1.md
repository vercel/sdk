# UpdateProjectBlockHistory1

## Example Usage

```typescript
import { UpdateProjectBlockHistory1 } from "@vercel/sdk/models/updateprojectdefinitions.js";

let value: UpdateProjectBlockHistory1 = {
  action: "blocked",
  createdAt: 9457.82,
  reason: "<value>",
  statusCode: 6178.34,
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