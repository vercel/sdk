# GetRoutesDestination2

## Example Usage

```typescript
import { GetRoutesDestination2 } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesDestination2 = {
  type: "service",
  service: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [models.GetRoutesDestinationType](../models/getroutesdestinationtype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `service`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `path`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Routing-only path used to select a route inside the target service.      |