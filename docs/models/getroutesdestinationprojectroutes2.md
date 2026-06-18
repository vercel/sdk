# GetRoutesDestinationProjectRoutes2

## Example Usage

```typescript
import { GetRoutesDestinationProjectRoutes2 } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesDestinationProjectRoutes2 = {
  type: "service",
  service: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [models.GetRoutesDestinationProjectRoutesType](../models/getroutesdestinationprojectroutestype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `service`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `path`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Routing-only path used to select a route inside the target service.                                |