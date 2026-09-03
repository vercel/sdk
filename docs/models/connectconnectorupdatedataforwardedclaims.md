# ConnectConnectorUpdateDataForwardedClaims

Allow-list of extra claims to propagate, keyed by source (idToken). Only claims named here and present in that source are exposed.

## Example Usage

```typescript
import { ConnectConnectorUpdateDataForwardedClaims } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: ConnectConnectorUpdateDataForwardedClaims = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `idToken`                                     | *string*[]                                    | :heavy_minus_sign:                            | ID token claim names that Connect can expose. |