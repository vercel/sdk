# UpdateProjectAws

## Example Usage

```typescript
import { UpdateProjectAws } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectAws = {
  subnetIds: [
    "<value 1>",
    "<value 2>",
  ],
  securityGroupId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `subnetIds`        | *string*[]         | :heavy_check_mark: | N/A                |
| `securityGroupId`  | *string*           | :heavy_check_mark: | N/A                |