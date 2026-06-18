# AddRouteDestination2

## Example Usage

```typescript
import { AddRouteDestination2 } from "@vercel/sdk/models/addrouteop.js";

let value: AddRouteDestination2 = {
  type: "service",
  service: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [models.AddRouteDestinationType](../models/addroutedestinationtype.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `service`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `path`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Routing-only path used to select a route inside the target service.    |