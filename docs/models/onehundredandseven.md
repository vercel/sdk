# OneHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeven } from "@vercel/sdk/models/usereventpayload84configuration.js";

let value: OneHundredAndSeven = {
  deploymentId: "<id>",
  deploymentUrl: null,
  deploymentName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `deploymentId`     | *string*           | :heavy_check_mark: | N/A                |
| `deploymentUrl`    | *string*           | :heavy_check_mark: | N/A                |
| `deploymentName`   | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |