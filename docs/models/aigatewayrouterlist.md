# AiGatewayRouterList

## Example Usage

```typescript
import { AiGatewayRouterList } from "@vercel/sdk/models/aigatewayrouterlist.js";

let value: AiGatewayRouterList = {
  routers: [
    {
      createdAt: 2520.53,
      deleted: false,
      kind: "<value>",
      ownerId: "<id>",
      status: "<value>",
      updatedAt: 6995.83,
      virtualModelSlug: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `routers`                                                                        | [models.AiGatewayVirtualModelConfig](../models/aigatewayvirtualmodelconfig.md)[] | :heavy_check_mark:                                                               | Active and archived router configurations owned by the authenticated team.       |