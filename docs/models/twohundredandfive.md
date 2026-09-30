# TwoHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFive } from "@vercel/sdk/models/redisoveragereason.js";

let value: TwoHundredAndFive = {
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `toDeploymentId`   | *string*           | :heavy_check_mark: | N/A                |