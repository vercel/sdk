# FiveHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortyFour } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortyFour = {
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