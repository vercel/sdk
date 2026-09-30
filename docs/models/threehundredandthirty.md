# ThreeHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirty } from "@vercel/sdk/models/twohundredandninetyfour.js";

let value: ThreeHundredAndThirty = {
  inheritDeploymentProtection: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `inheritDeploymentProtection` | *boolean*                     | :heavy_check_mark:            | N/A                           |
| `projectId`                   | *string*                      | :heavy_check_mark:            | N/A                           |
| `projectName`                 | *string*                      | :heavy_check_mark:            | N/A                           |