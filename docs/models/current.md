# Current

## Example Usage

```typescript
import { Current } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: Current = {
  awsServiceName: "<value>",
  configurationId: "<id>",
  id: "<id>",
  name: "<value>",
  vercelRegion: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `awsServiceName`   | *string*           | :heavy_check_mark: | N/A                |
| `configurationId`  | *string*           | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `privateDnsNames`  | *string*[]         | :heavy_minus_sign: | N/A                |
| `vercelRegion`     | *string*           | :heavy_check_mark: | N/A                |