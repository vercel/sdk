# CreateDrainDelivery5

## Example Usage

```typescript
import { CreateDrainDelivery5 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainDelivery5 = {
  type: "internal",
  target: "vercel-otel-traces-db",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | *"internal"*                                                               | :heavy_check_mark:                                                         | N/A                                                                        |
| `target`                                                                   | [models.CreateDrainDeliveryTarget](../models/createdraindeliverytarget.md) | :heavy_check_mark:                                                         | N/A                                                                        |