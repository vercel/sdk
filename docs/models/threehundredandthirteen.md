# ThreeHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirteen } from "@vercel/sdk/models/usereventpayloadgitprovider.js";

let value: ThreeHundredAndThirteen = {
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