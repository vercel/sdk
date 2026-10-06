# FourHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyOne } from "@vercel/sdk/models/fourhundredandtwentytwo.js";

let value: FourHundredAndSeventyOne = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `deploymentId`     | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_minus_sign: | N/A                |
| `runId`            | *string*           | :heavy_check_mark: | N/A                |