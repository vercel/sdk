# AiGatewayEvaluationFallbackCondition5

## Example Usage

```typescript
import { AiGatewayEvaluationFallbackCondition5 } from "@vercel/sdk/models/aigatewayevaluationfallbackcondition.js";

let value: AiGatewayEvaluationFallbackCondition5 = {
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
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `atLeast`                              | [models.AtLeast](../models/atleast.md) | :heavy_check_mark:                     | N/A                                    |