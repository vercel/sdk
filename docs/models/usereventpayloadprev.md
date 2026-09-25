# UserEventPayloadPrev

## Example Usage

```typescript
import { UserEventPayloadPrev } from "@vercel/sdk/models/twohundredandseventeen.js";

let value: UserEventPayloadPrev = {
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