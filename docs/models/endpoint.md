# Endpoint

## Example Usage

```typescript
import { Endpoint } from "@vercel/sdk/models/usereventpayload262origin.js";

let value: Endpoint = {
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