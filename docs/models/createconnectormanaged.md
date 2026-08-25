# CreateConnectorManaged

Managed connector metadata exposed without leaking the manager connector or installation identifiers.

## Example Usage

```typescript
import { CreateConnectorManaged } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorManaged = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `sync`                                                   | *boolean*                                                | :heavy_minus_sign:                                       | Whether Vercel synchronizes provider-side configuration. |