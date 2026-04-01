# GetMicrofrontendsInGroupBlockHistory1

## Example Usage

```typescript
import { GetMicrofrontendsInGroupBlockHistory1 } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupBlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 6561.38,
  createdAt: 983.18,
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