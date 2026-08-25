# ConnectTriggerConfiguration

Incoming trigger configuration. Only present when enabled.

## Example Usage

```typescript
import { ConnectTriggerConfiguration } from "@vercel/sdk/models/connecttriggerconfiguration.js";

let value: ConnectTriggerConfiguration = {
  enabled: true,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `enabled`                                                | *boolean*                                                | :heavy_check_mark:                                       | Whether incoming triggers are enabled for the connector. |