# CreateProjectAws

## Example Usage

```typescript
import { CreateProjectAws } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectAws = {
  subnetIds: [
    "<value>",
  ],
  securityGroupId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `subnetIds`        | *string*[]         | :heavy_check_mark: | N/A                |
| `securityGroupId`  | *string*           | :heavy_check_mark: | N/A                |