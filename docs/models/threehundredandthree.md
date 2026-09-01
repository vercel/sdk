# ThreeHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThree } from "@vercel/sdk/models/twohundredandseventyone.js";

let value: ThreeHundredAndThree = {
  projectId: "<id>",
  projectName: "<value>",
  inheritDeploymentProtection: false,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `projectId`                   | *string*                      | :heavy_check_mark:            | N/A                           |
| `projectName`                 | *string*                      | :heavy_check_mark:            | N/A                           |
| `inheritDeploymentProtection` | *boolean*                     | :heavy_check_mark:            | N/A                           |