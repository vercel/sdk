# OneHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyEight } from "@vercel/sdk/models/onehundredandthirty.js";

let value: OneHundredAndThirtyEight = {
  deploymentId: "<id>",
  deploymentName: "<value>",
  deploymentUrl: "https://flawless-marketplace.org/",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `deploymentId`     | *string*           | :heavy_check_mark: | N/A                |
| `deploymentName`   | *string*           | :heavy_check_mark: | N/A                |
| `deploymentUrl`    | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |