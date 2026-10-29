# FourHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetySix } from "@vercel/sdk/models/usereventpayload453actortype.js";

let value: FourHundredAndNinetySix = {
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