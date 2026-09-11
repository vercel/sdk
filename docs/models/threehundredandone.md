# ThreeHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndOne } from "@vercel/sdk/models/twohundredandseventysix.js";

let value: ThreeHundredAndOne = {
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
| `action`             | *string*             | :heavy_minus_sign:   | N/A                  |