# UpdateStaticIpsAws

## Example Usage

```typescript
import { UpdateStaticIpsAws } from "@vercel/sdk/models/updatestaticipsop.js";

let value: UpdateStaticIpsAws = {
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