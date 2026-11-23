# ThreeHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNineteen } from "@vercel/sdk/models/usereventpayload260next.js";

let value: ThreeHundredAndNineteen = {
  previewDeploymentsEnabled: false,
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