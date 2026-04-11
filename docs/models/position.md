# Position

Controls where the route is inserted. Defaults to "end" if omitted.

## Example Usage

```typescript
import { Position } from "@vercel/sdk/models/addrouteop.js";

let value: Position = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `placement`                                                     | [models.Placement](../models/placement.md)                      | :heavy_minus_sign:                                              | "after"/"before" require referenceId.                           |
| `referenceId`                                                   | *string*                                                        | :heavy_minus_sign:                                              | Route ID to insert after/before. Required for "after"/"before". |