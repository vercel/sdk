# OneHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyTwo } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwentyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  productionDeploymentsFastLane: false,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `projectId`                     | *string*                        | :heavy_check_mark:              | N/A                             |
| `projectName`                   | *string*                        | :heavy_check_mark:              | N/A                             |
| `productionDeploymentsFastLane` | *boolean*                       | :heavy_check_mark:              | N/A                             |