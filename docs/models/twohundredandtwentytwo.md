# TwoHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyTwo } from "@vercel/sdk/models/onehundredandsixtyfour.js";

let value: TwoHundredAndTwentyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  productionDeploymentsFastLane: true,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `projectId`                     | *string*                        | :heavy_check_mark:              | N/A                             |
| `projectName`                   | *string*                        | :heavy_check_mark:              | N/A                             |
| `productionDeploymentsFastLane` | *boolean*                       | :heavy_check_mark:              | N/A                             |