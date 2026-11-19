# ThreeHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyTwo } from "@vercel/sdk/models/threehundredandfifteen.js";

let value: ThreeHundredAndSeventyTwo = {
  inheritDeploymentProtection: false,
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