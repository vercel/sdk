# TwoHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyEight } from "@vercel/sdk/models/payloaddefault.js";

let value: TwoHundredAndFiftyEight = {
  previewDeploymentsEnabled: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `previewDeploymentsEnabled` | *boolean*                   | :heavy_check_mark:          | N/A                         |
| `projectId`                 | *string*                    | :heavy_check_mark:          | N/A                         |
| `projectName`               | *string*                    | :heavy_check_mark:          | N/A                         |