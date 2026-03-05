# EditRouteRequestBody

## Example Usage

```typescript
import { EditRouteRequestBody } from "@vercel/sdk/models/editrouteop.js";

let value: EditRouteRequestBody = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `route`                                                                    | [models.EditRouteRoute](../models/editrouteroute.md)                       | :heavy_minus_sign:                                                         | The full route object to replace the existing route with                   |
| `restore`                                                                  | *boolean*                                                                  | :heavy_minus_sign:                                                         | If true, restores the staged route to the value in the production version. |