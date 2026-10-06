# DeploymentBinding

## Example Usage

```typescript
import { DeploymentBinding } from "@vercel/sdk/models/listvercelcitaskrunsop.js";

let value: DeploymentBinding = {
  deploymentId: "<id>",
  deploymentCreatedAt: 7528.7,
  eventAt: 9386.31,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `deploymentId`        | *string*              | :heavy_check_mark:    | N/A                   |
| `deploymentCreatedAt` | *number*              | :heavy_check_mark:    | N/A                   |
| `eventAt`             | *number*              | :heavy_check_mark:    | N/A                   |
| `readyState`          | *string*              | :heavy_minus_sign:    | N/A                   |