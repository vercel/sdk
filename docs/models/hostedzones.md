# HostedZones

Metadata about any AWS Route53 Hosted Zones associated with the Network.

## Example Usage

```typescript
import { HostedZones } from "@vercel/sdk/models/network.js";

let value: HostedZones = {
  count: 8578.16,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `count`                                                             | *number*                                                            | :heavy_check_mark:                                                  | The number of AWS Route53 Hosted Zones associated with the Network. |