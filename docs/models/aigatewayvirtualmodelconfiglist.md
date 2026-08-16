# AiGatewayVirtualModelConfigList

## Example Usage

```typescript
import { AiGatewayVirtualModelConfigList } from "@vercel/sdk/models/aigatewayvirtualmodelconfiglist.js";

let value: AiGatewayVirtualModelConfigList = {
  virtualModelConfigs: [],
  cursor: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `virtualModelConfigs`                                                            | [models.AiGatewayVirtualModelConfig](../models/aigatewayvirtualmodelconfig.md)[] | :heavy_check_mark:                                                               | The page of VMCs.                                                                |
| `cursor`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Cursor for the next page, or null when no more pages remain.                     |