# GetRoutesDestinationProjectRoutesResponse2

## Example Usage

```typescript
import { GetRoutesDestinationProjectRoutesResponse2 } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesDestinationProjectRoutesResponse2 = {
  type: "service",
  service: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [models.GetRoutesDestinationProjectRoutesResponseType](../models/getroutesdestinationprojectroutesresponsetype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `service`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `path`                                                                                                             | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Routing-only path used to select a route inside the target service.                                                |