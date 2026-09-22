# OneHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyTwo } from "@vercel/sdk/models/onehundredandfiftyfive.js";

let value: OneHundredAndSeventyTwo = {
  fromDeploymentId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `fromDeploymentId` | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `reason`           | *string*           | :heavy_minus_sign: | N/A                |
| `toDeploymentId`   | *string*           | :heavy_check_mark: | N/A                |