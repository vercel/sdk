# FourHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtySix } from "@vercel/sdk/models/fourhundredandseventeen.js";

let value: FourHundredAndSixtySix = {
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