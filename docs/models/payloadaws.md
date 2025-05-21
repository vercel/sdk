# PayloadAws

## Example Usage

```typescript
import { PayloadAws } from "@vercel/sdk/models/userevent.js";

let value: PayloadAws = {
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