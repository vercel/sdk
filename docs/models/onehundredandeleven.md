# OneHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEleven } from "@vercel/sdk/models/gitcredentialsource.js";

let value: OneHundredAndEleven = {
  deploymentId: "<id>",
  deploymentUrl: "https://well-off-shipper.net",
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