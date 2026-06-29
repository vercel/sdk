# UserEventPayloadPrev

## Example Usage

```typescript
import { UserEventPayloadPrev } from "@vercel/sdk/models/onehundredandeightythree.js";

let value: UserEventPayloadPrev = {
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