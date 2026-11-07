# ThreeHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyEight } from "@vercel/sdk/models/principalintegration.js";

let value: ThreeHundredAndFortyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectId`          | *string*             | :heavy_check_mark:   | N/A                  |
| `projectName`        | *string*             | :heavy_check_mark:   | N/A                  |
| `targetDeploymentId` | *string*             | :heavy_minus_sign:   | N/A                  |