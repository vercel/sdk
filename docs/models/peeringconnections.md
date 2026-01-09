# PeeringConnections

Metadata about any AWS Route53 Hosted Zones associated with the Network.

## Example Usage

```typescript
import { PeeringConnections } from "@vercel/sdk/models/network.js";

let value: PeeringConnections = {
  count: 5300.85,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `count`                                                             | *number*                                                            | :heavy_check_mark:                                                  | The number of AWS Route53 Hosted Zones associated with the Network. |