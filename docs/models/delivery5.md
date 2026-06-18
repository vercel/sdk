# Delivery5

## Example Usage

```typescript
import { Delivery5 } from "@vercel/sdk/models/createdrainop.js";

let value: Delivery5 = {
  type: "internal",
  target: "vercel-otel-traces-db",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"internal"*                                         | :heavy_check_mark:                                   | N/A                                                  |
| `target`                                             | [models.DeliveryTarget](../models/deliverytarget.md) | :heavy_check_mark:                                   | N/A                                                  |