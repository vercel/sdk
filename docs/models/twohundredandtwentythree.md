# TwoHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyThree } from "@vercel/sdk/models/usereventpayloadorigin.js";

let value: TwoHundredAndTwentyThree = {
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