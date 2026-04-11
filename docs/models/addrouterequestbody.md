# AddRouteRequestBody

## Example Usage

```typescript
import { AddRouteRequestBody } from "@vercel/sdk/models/addrouteop.js";

let value: AddRouteRequestBody = {
  route: {
    name: "<value>",
    route: {
      src: "<value>",
    },
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `route`                                                             | [models.AddRouteRoute](../models/addrouteroute.md)                  | :heavy_check_mark:                                                  | N/A                                                                 |
| `position`                                                          | [models.Position](../models/position.md)                            | :heavy_minus_sign:                                                  | Controls where the route is inserted. Defaults to "end" if omitted. |