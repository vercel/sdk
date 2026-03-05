# GenerateRouteActions

## Example Usage

```typescript
import { GenerateRouteActions } from "@vercel/sdk/models/generaterouteop.js";

let value: GenerateRouteActions = {
  type: "set-status",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [models.GenerateRouteType](../models/generateroutetype.md)                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `subType`                                                                                    | [models.SubType](../models/subtype.md)                                                       | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `dest`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `status`                                                                                     | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `headers`                                                                                    | [models.GenerateRouteProjectRoutesHeaders](../models/generaterouteprojectroutesheaders.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |