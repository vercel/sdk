# AiGatewayEvaluationFallbackCondition1

Without a question, checks every Choice and Score question.

## Example Usage

```typescript
import { AiGatewayEvaluationFallbackCondition1 } from "@vercel/sdk/models/aigatewayevaluationfallbackcondition.js";

let value: AiGatewayEvaluationFallbackCondition1 = {
  confidenceBelow: 9907.48,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `confidenceBelow`  | *number*           | :heavy_check_mark: | N/A                |
| `question`         | *string*           | :heavy_minus_sign: | N/A                |