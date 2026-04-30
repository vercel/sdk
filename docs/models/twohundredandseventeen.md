# TwoHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventeen } from "@vercel/sdk/models/oldoptionsallowlist.js";

let value: TwoHundredAndSeventeen = {
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