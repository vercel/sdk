# ThreeHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFifteen } from "@vercel/sdk/models/payloadaws.js";

let value: ThreeHundredAndFifteen = {
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