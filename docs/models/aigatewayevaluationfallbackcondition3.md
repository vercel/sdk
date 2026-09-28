# AiGatewayEvaluationFallbackCondition3

## Example Usage

```typescript
import { AiGatewayEvaluationFallbackCondition3 } from "@vercel/sdk/models/aigatewayevaluationfallbackcondition.js";

let value: AiGatewayEvaluationFallbackCondition3 = {
  any: [
    {
      atLeast: {
        conditions: [
          {
            all: [
              {
                confidenceBelow: 1793.37,
                question: "<value>",
              },
            ],
          },
        ],
        count: 2609.01,
      },
    },
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `any`                                           | *models.AiGatewayEvaluationFallbackCondition*[] | :heavy_check_mark:                              | N/A                                             |