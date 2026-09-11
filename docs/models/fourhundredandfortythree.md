# FourHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyThree } from "@vercel/sdk/models/fourhundredandseven.js";

let value: FourHundredAndFortyThree = {
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