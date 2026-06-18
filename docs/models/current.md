# Current

## Example Usage

```typescript
import { Current } from "@vercel/sdk/models/usereventpayloaddeploymenttype.js";

let value: Current = {
  id: "<id>",
  name: "<value>",
  projectId: "<id>",
  vercelRegion: "<value>",
  awsServiceName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `vercelRegion`     | *string*           | :heavy_check_mark: | N/A                |
| `awsServiceName`   | *string*           | :heavy_check_mark: | N/A                |
| `privateDnsNames`  | *string*[]         | :heavy_minus_sign: | N/A                |