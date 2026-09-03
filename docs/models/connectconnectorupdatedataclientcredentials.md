# ConnectConnectorUpdateDataClientCredentials

Client credentials grant settings.

## Example Usage

```typescript
import { ConnectConnectorUpdateDataClientCredentials } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: ConnectConnectorUpdateDataClientCredentials = {
  enabled: false,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `enabled`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | Whether this OAuth grant is enabled.                                 |
| `scopes`                                                             | *string*[]                                                           | :heavy_minus_sign:                                                   | Default scopes to request when token params specify scopes: [\"*\"]. |