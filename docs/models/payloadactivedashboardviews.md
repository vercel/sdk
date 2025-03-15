# PayloadActiveDashboardViews

## Example Usage

```typescript
import { PayloadActiveDashboardViews } from "@vercel/sdk/models/userevent.js";

let value: PayloadActiveDashboardViews = {
  scopeId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `scopeId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `viewPreference`                                                                     | [models.PayloadViewPreference](../models/payloadviewpreference.md)                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `favoritesViewPreference`                                                            | [models.PayloadFavoritesViewPreference](../models/payloadfavoritesviewpreference.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `recentsViewPreference`                                                              | [models.PayloadRecentsViewPreference](../models/payloadrecentsviewpreference.md)     | :heavy_minus_sign:                                                                   | N/A                                                                                  |