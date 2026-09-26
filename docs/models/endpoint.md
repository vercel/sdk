# Endpoint

## Example Usage

```typescript
import { Endpoint } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: Endpoint = {
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