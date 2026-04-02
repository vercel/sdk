# OneHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwelve } from "@vercel/sdk/models/ninetyeight.js";

let value: OneHundredAndTwelve = {
  projectId: "<id>",
  fromDeploymentId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `fromDeploymentId` | *string*           | :heavy_check_mark: | N/A                |
| `toDeploymentId`   | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `reason`           | *string*           | :heavy_minus_sign: | N/A                |