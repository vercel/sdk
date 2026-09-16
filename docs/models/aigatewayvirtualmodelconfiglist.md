# AiGatewayVirtualModelConfigList

## Example Usage

```typescript
import { AiGatewayVirtualModelConfigList } from "@vercel/sdk/models/aigatewayvirtualmodelconfiglist.js";

let value: AiGatewayVirtualModelConfigList = {
  cursor: "<value>",
  virtualModelConfigs: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `cursor`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Cursor for the next page, or null when no more pages remain.                     |
| `virtualModelConfigs`                                                            | [models.AiGatewayVirtualModelConfig](../models/aigatewayvirtualmodelconfig.md)[] | :heavy_check_mark:                                                               | The page of VMCs.                                                                |