# TwoHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventeen } from "@vercel/sdk/models/onehundredandninety.js";

let value: TwoHundredAndSeventeen = {
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