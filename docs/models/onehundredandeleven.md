# OneHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEleven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndEleven = {
  storeType: "postgres",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `storeType`                                | [models.StoreType](../models/storetype.md) | :heavy_check_mark:                         | N/A                                        |