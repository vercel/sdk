# UploadProjectAvatarBlockHistory2

## Example Usage

```typescript
import { UploadProjectAvatarBlockHistory2 } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarBlockHistory2 = {
  action: "unblocked",
  createdAt: 390.96,
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