# PayloadEndpoint

## Example Usage

```typescript
import { PayloadEndpoint } from "@vercel/sdk/models/usereventpayload258previousdeploymenttype.js";

let value: PayloadEndpoint = {
  awsServiceName: "<value>",
  id: "<id>",
  name: "<value>",
  projectId: "<id>",
  vercelRegion: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `awsServiceName`   | *string*           | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `privateDnsNames`  | *string*[]         | :heavy_minus_sign: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `vercelRegion`     | *string*           | :heavy_check_mark: | N/A                |