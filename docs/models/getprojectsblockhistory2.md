# GetProjectsBlockHistory2

## Example Usage

```typescript
import { GetProjectsBlockHistory2 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsBlockHistory2 = {
  action: "unblocked",
  createdAt: 7151.4,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `action`              | *"unblocked"*         | :heavy_check_mark:    | N/A                   |
| `createdAt`           | *number*              | :heavy_check_mark:    | N/A                   |
| `caseId`              | *string*              | :heavy_minus_sign:    | N/A                   |
| `actor`               | *string*              | :heavy_minus_sign:    | N/A                   |
| `comment`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `ineligibleForAppeal` | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `isCascading`         | *boolean*             | :heavy_minus_sign:    | N/A                   |