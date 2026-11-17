# ThreeHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEleven } from "@vercel/sdk/models/threehundredandfour.js";

let value: ThreeHundredAndEleven = {
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