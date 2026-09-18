# TwoHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyNine } from "@vercel/sdk/models/trigger.js";

let value: TwoHundredAndFortyNine = {
  productionDeploymentsFastLane: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `productionDeploymentsFastLane` | *boolean*                       | :heavy_check_mark:              | N/A                             |
| `projectId`                     | *string*                        | :heavy_check_mark:              | N/A                             |
| `projectName`                   | *string*                        | :heavy_check_mark:              | N/A                             |