# ThreeHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTen } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: ThreeHundredAndTen = {
  projectId: "<id>",
  projectName: "<value>",
  inheritDeploymentProtection: true,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `projectId`                   | *string*                      | :heavy_check_mark:            | N/A                           |
| `projectName`                 | *string*                      | :heavy_check_mark:            | N/A                           |
| `inheritDeploymentProtection` | *boolean*                     | :heavy_check_mark:            | N/A                           |