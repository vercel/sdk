# ConnectConnectorCreateResultManaged

Managed connector metadata exposed without leaking the manager connector or installation identifiers.

## Example Usage

```typescript
import { ConnectConnectorCreateResultManaged } from "@vercel/sdk/models/connectconnectorcreateresult.js";

let value: ConnectConnectorCreateResultManaged = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `sync`                                                   | *boolean*                                                | :heavy_minus_sign:                                       | Whether Vercel synchronizes provider-side configuration. |