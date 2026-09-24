# Current

## Example Usage

```typescript
import { Current } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: Current = {
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