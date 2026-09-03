# ConnectConnectorUpdateDataTypeApiKey

## Example Usage

```typescript
import { ConnectConnectorUpdateDataTypeApiKey } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: ConnectConnectorUpdateDataTypeApiKey = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `toDelete`                                 | *string*[]                                 | :heavy_minus_sign:                         | Stored API key value IDs to delete.        |
| `toAdd`                                    | [models.ToAdd](../models/toadd.md)[]       | :heavy_minus_sign:                         | API key values to add.                     |
| `toUpdate`                                 | [models.ToUpdate](../models/toupdate.md)[] | :heavy_minus_sign:                         | Existing API key values to update.         |