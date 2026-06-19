# TwoHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndOne } from "@vercel/sdk/models/removedusers.js";

let value: TwoHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentsEnabled: true,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `projectId`                 | *string*                    | :heavy_check_mark:          | N/A                         |
| `projectName`               | *string*                    | :heavy_check_mark:          | N/A                         |
| `previewDeploymentsEnabled` | *boolean*                   | :heavy_check_mark:          | N/A                         |