# GetProjectsBlockHistoryProjectsResponse1

## Example Usage

```typescript
import { GetProjectsBlockHistoryProjectsResponse1 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsBlockHistoryProjectsResponse1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 4808.42,
  createdAt: 9677.51,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `action`              | *"blocked"*           | :heavy_check_mark:    | N/A                   |
| `reason`              | *string*              | :heavy_check_mark:    | N/A                   |
| `statusCode`          | *number*              | :heavy_check_mark:    | N/A                   |
| `createdAt`           | *number*              | :heavy_check_mark:    | N/A                   |
| `caseId`              | *string*              | :heavy_minus_sign:    | N/A                   |
| `actor`               | *string*              | :heavy_minus_sign:    | N/A                   |
| `comment`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `ineligibleForAppeal` | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `isCascading`         | *boolean*             | :heavy_minus_sign:    | N/A                   |