# OneHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyTwo } from "@vercel/sdk/models/job2.js";

let value: OneHundredAndFortyTwo = {
  deploymentId: "<id>",
  deploymentName: "<value>",
  deploymentUrl: "https://super-labourer.net",
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