# OneHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndOne } from "@vercel/sdk/models/job6.js";

let value: OneHundredAndOne = {
  deploymentId: "<id>",
  deploymentUrl: "https://insidious-deer.info",
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