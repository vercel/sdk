# Peering

## Example Usage

```typescript
import { Peering } from "@vercel/sdk/models/userevent.js";

let value: Peering = {
  id: "<id>",
  accountId: "<id>",
  region: "<value>",
  vpcId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `accountId`        | *string*           | :heavy_check_mark: | N/A                |
| `region`           | *string*           | :heavy_check_mark: | N/A                |
| `vpcId`            | *string*           | :heavy_check_mark: | N/A                |