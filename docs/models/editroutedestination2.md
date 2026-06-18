# EditRouteDestination2

## Example Usage

```typescript
import { EditRouteDestination2 } from "@vercel/sdk/models/editrouteop.js";

let value: EditRouteDestination2 = {
  type: "service",
  service: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [models.EditRouteDestinationType](../models/editroutedestinationtype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `service`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `path`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Routing-only path used to select a route inside the target service.      |